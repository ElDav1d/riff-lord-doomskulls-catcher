class Game {
  constructor() {
    this.frames = 1;
    this.isGameOn = true;
    this.score = 0;
    this.gameSpeedState = 1;
    this.gameNewSpeed = 1;
    this.gameSpeedMin = 0.25;
    this.gameSpeedMax = 1.5;
    this.gameBackground = new Background();
    this.gameGeneratorVariance = 2;
    this.gameSoundFX = [];

    this.character = new Character(
      INIT_X_POSITION,
      Y_POSITION,
      CHARACTER_WIDTH,
      CHARACTER_HEIGHT
    );
    this.characterMoves = {
      left: false,
      right: false,
    };

    this.wallArray = [];
    this.wallGenerationFactor = 60;
    this.wallGeneration;
    this.wallGapFactor = 200;
    this.wallGapVariance = 1.5;
    this.wallSpeed = 3;

    this.skullTypes = ["skullHigh", "skullMid", "skullLow"];

    this.skullHighSpeed = 9;
    this.skullHighGenerationFactor = 60 * 10;

    this.skullMidSpeed = 7;
    this.skullMidGenerationFactor = 60 * 2.5;

    this.skullLowSpeed = 5;
    this.skullLowGenerationFactor = 60 * 0.75;

    this.skullStack = {
      skullHighArray: [],
      skullMidArray: [],
      skullLowArray: [],
    };

    this.leafArray = [];
    this.leafSpeed = 3;
    this.leafGenerationFactor = 60 * 5;

    this.pillArray = [];
    this.pillSpeed = 7;
    this.pillGenerationFactor = 60 * 0.5;
  }

  moveCharacter = () => {
    if (this.characterMoves.right) {
      this.character.moveRigth();
    }

    if (this.characterMoves.left) {
      this.character.moveLeft();
    }
  };

  randomizeWallGap = () => {
    const isLeftStarting = Math.round(Math.random());
    const randomVariance =
      Math.round(Math.random() * 100 + 1) * this.wallGapVariance;

    if (isLeftStarting) {
      return -this.wallGapFactor - randomVariance;
    } else {
      return this.wallGapFactor + randomVariance;
    }
  };

  randomizeXPosition = itemWidth => {
    const randomXPosition = Math.floor(Math.random() * canvas.width);

    const isRigthExcess = randomXPosition + itemWidth > canvas.width;

    if (isRigthExcess) {
      return canvas.width - itemWidth;
    }

    return randomXPosition;
  };

  updateStackSpeed = stack => {
    if (stack.length > 1) {
      const lastItem = stack[stack.length - 1];
      const prevItem = stack[stack.length - 2];

      if (lastItem.speed !== prevItem.speed) {
        stack.forEach(item => {
          item.speed = lastItem.speed;
        });
      }
    }
  };

  manageItemSpeed = (itemSpeedKey, itemGenerationFactorKey) => {
    if (this.gameNewSpeed < this.gameSpeedState) {
      this[itemGenerationFactorKey] += this.gameGeneratorVariance;

      this[itemSpeedKey] -= this.gameSpeedState - this.gameNewSpeed;

      this.gameSpeedState = this.gameNewSpeed;
    } else if (this.gameNewSpeed > this.gameSpeedState) {
      this[itemGenerationFactorKey] -= this.gameGeneratorVariance;

      this[itemSpeedKey] += this.gameNewSpeed - this.gameSpeedState;

      this.gameSpeedState = this.gameNewSpeed;
    }
  };

  isFramesPerSec = itemGenerationFactorKey =>
    this.frames % this[itemGenerationFactorKey] === 0;

  createWall = () => {
    this.manageItemSpeed("wallSpeed", "wallGenerationFactor");

    if (this.isFramesPerSec("wallGenerationFactor")) {
      const wall = new Wall(0, 0, this.wallSpeed * this.gameSpeedState);

      wall.x = this.randomizeWallGap();

      this.wallArray.push(wall);
    }

    this.updateStackSpeed(this.wallArray);
  };

  createSkull = skullType => {
    this.manageItemSpeed(`${skullType}Speed`, `${skullType}GenerationFactor`);
    if (this.isFramesPerSec([`${skullType}GenerationFactor`])) {
      let skull;

      switch (skullType) {
        case "skullHigh":
          skull = new SkullHigh(
            0,
            0,
            this[`${skullType}Speed`] * this.gameSpeedState
          );
          break;
        case "skullMid":
          skull = new SkullMid(
            0,
            0,
            this[`${skullType}Speed`] * this.gameSpeedState
          );
          break;
        default:
          skull = new SkullLow(
            0,
            0,
            this[`${skullType}Speed`] * this.gameSpeedState
          );
          break;
      }

      skull.x = this.randomizeXPosition(skull.w);

      this.skullStack[`${skullType}Array`].push(skull);
    }

    this.updateStackSpeed(this.skullStack[`${skullType}Array`]);
  };

  createLeaf = () => {
    this.manageItemSpeed("leafSpeed", "leafGenerationFactor");

    if (this.isFramesPerSec("leafGenerationFactor")) {
      const leaf = new Leaf(0, 0, this.leafSpeed * this.gameSpeedState);

      leaf.x = this.randomizeXPosition(leaf.w);

      this.leafArray.push(leaf);
    }

    this.updateStackSpeed(this.leafArray);
  };

  createPill = () => {
    this.manageItemSpeed("pillSpeed", "pillGenerationFactor");

    if (this.isFramesPerSec("pillGenerationFactor")) {
      const pill = new Pill(0, 0, this.pillSpeed * this.gameSpeedState);

      pill.x = this.randomizeXPosition(pill.w);

      this.pillArray.push(pill);
    }

    this.updateStackSpeed(this.pillArray);
  };

  cleanStack = stack => {
    if (stack.length && stack[0].y + stack[0].h > canvas.height) {
      stack.shift();
    }
  };

  hasCollision = (element, isLoose = false) => {
    if (isLoose) {
      return (
        element.x < this.character.x + this.character.w * 0.65 &&
        element.x + element.w > this.character.x + this.character.w * 0.35 &&
        element.y < this.character.y + this.character.h * 0.3 &&
        element.h + element.y > this.character.y + this.character.h * 0.7
      );
    } else {
      return (
        element.x < this.character.x + this.character.w &&
        element.x + element.w > this.character.x &&
        element.y < this.character.y + this.character.h &&
        element.h + element.y > this.character.y
      );
    }
  };

  handleSkullCollisions = () => {
    Object.keys(this.skullStack).forEach(key => {
      this.skullStack[key].forEach((skull, index) => {
        if (this.hasCollision(skull)) {
          this.skullStack[key].splice(index, 1);

          this.score += skull.points;

          if (key.includes("skullHigh")) {
            skull.cleanSoundFx(this.gameSoundFX);
          }

          skull.stackSound(this.gameSoundFX);
          skull.manageSound();
        }
      });
    });
  };

  moveSkulls = () => {
    Object.keys(this.skullStack).forEach(key => {
      this.skullStack[key].forEach(skull => {
        skull.moveItem();
      });
    });
  };

  drawSkulls = () => {
    Object.keys(this.skullStack).forEach(key => {
      this.skullStack[key].forEach(skull => {
        skull.drawItem();
      });
    });
  };

  cleanSkullStack = () => {
    Object.keys(this.skullStack).forEach(key => {
      this.cleanStack(this.skullStack[key]);
    });
  };

  handleLeafCollisions = () => {
    this.leafArray.forEach((leaf, index) => {
      if (this.hasCollision(leaf)) {
        this.leafArray.splice(index, 1);

        if (this.gameSpeedState > this.gameSpeedMin) {
          this.gameNewSpeed -= leaf.bonus;
        }

        leaf.stackSound(this.gameSoundFX);
        leaf.manageSound();
      }
    });
  };

  handlePillCollision = () => {
    this.pillArray.forEach((pill, index) => {
      if (this.hasCollision(pill)) {
        this.pillArray.splice(index, 1);

        if (this.gameSpeedState < this.gameSpeedMax) {
          this.gameNewSpeed += pill.malus;
        }

        pill.stackSound(this.gameSoundFX);
        pill.manageSound();
      }
    });
  };

  handleWallCollisions = () => {
    this.wallArray.forEach(wall => {
      if (this.hasCollision(wall, true)) {
        wall.cleanSoundFx(this.gameSoundFX);
        wall.manageSound();

        this.gameOver();
      }
    });
  };

  displayScore = () => {
    gameScoreDOM.innerText = this.score;
  };

  gameOver = () => {
    this.isGameOn = false;

    setTimeout(() => {
      gameScreenDOM.style.display = "none";

      gameoverScreenDOM.style.display = "flex";

      soundGameDOM.loop = false;
    }, 1000);
  };

  gameLoop = () => {
    // control
    this.frames++;

    // clear
    context.clearRect(0, 0, canvas.width, canvas.height);

    // animation and actions
    this.displayScore();

    this.moveCharacter();

    this.wallArray.forEach(wall => {
      wall.moveItem();
    });

    this.moveSkulls();

    this.leafArray.forEach(leaf => {
      leaf.moveItem();
    });

    this.pillArray.forEach(pill => {
      pill.moveItem();
    });

    this.handleWallCollisions();
    this.handleSkullCollisions();
    this.handleLeafCollisions();
    this.handlePillCollision();

    // drawing
    this.gameBackground.drawBackground();

    this.wallArray.forEach(wall => {
      wall.drawItem();
    });

    this.character.drawCharacter();

    this.drawSkulls();

    this.leafArray.forEach(leaf => {
      leaf.drawItem();
    });

    this.pillArray.forEach(pill => {
      pill.drawItem();
    });

    //spawning
    this.createWall();

    this.skullTypes.forEach(type => {
      this.createSkull(type);
    });

    this.createLeaf();
    this.createPill();

    this.cleanSkullStack();
    this.cleanStack(this.wallArray);
    this.cleanStack(this.leafArray);
    this.cleanStack(this.pillArray);

    // recursion
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
