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

    this.character = new Character(
      initXPosition,
      yPosition,
      characterW,
      characterH
    );

    this.wallArray = [];
    this.wallGenerationFactor = 90;
    this.wallGeneration;
    this.wallGapFactor = 200;
    this.wallGapVariance = 1.5;
    this.wallSpeed = 3;

    this.skullArray = [];
    this.skullSpeed = 5;
    this.skullGenerationFactor = 60;

    this.leafArray = [];
    this.leafSpeed = 3;
    this.leafGenerationFactor = 180;

    this.pillArray = [];
    this.pillSpeed = 6;
    this.pillGenerationFactor = 45;
  }

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

  createWall = () => {
    if (this.gameNewSpeed < this.gameSpeedState) {
      this.wallGenerationFactor += this.gameGeneratorVariance;

      this.wallSpeed -= this.gameSpeedState - this.gameNewSpeed;

      this.gameSpeedState = this.gameNewSpeed;
    } else if (this.gameNewSpeed > this.gameSpeedState) {
      this.wallGenerationFactor -= this.gameGeneratorVariance;

      this.wallSpeed += this.gameNewSpeed - this.gameSpeedState;

      this.gameSpeedState = this.gameNewSpeed;
    }

    const isFramesPerSec = this.frames % this.wallGenerationFactor === 0;

    if (this.wallArray.length === 0 || isFramesPerSec) {
      const wall = new Wall(0, 0, this.wallSpeed);

      wall.x = this.randomizeWallGap();

      this.wallArray.push(wall);
    }

    this.updateStackSpeed(this.wallArray);
  };

  createSkull = () => {
    if (this.gameNewSpeed < this.gameSpeedState) {
      this.skullGenerationFactor += this.gameGeneratorVariance;

      this.skullSpeed -= this.gameSpeedState - this.gameNewSpeed;

      this.gameSpeedState = this.gameNewSpeed;
    } else if (this.gameNewSpeed > this.gameSpeedState) {
      this.skullGenerationFactor -= this.gameGeneratorVariance;

      this.skullSpeed += this.gameNewSpeed - this.gameSpeedState;

      this.gameSpeedState = this.gameNewSpeed;
    }

    const isFramesPerSec = this.frames % this.skullGenerationFactor === 0;

    if (this.skullArray.length === 0 || isFramesPerSec) {
      const skull = new Skull(0, 0, this.skullSpeed * this.gameSpeedState);

      skull.x = this.randomizeXPosition(skull.w);

      this.skullArray.push(skull);
    }

    this.updateStackSpeed(this.skullArray);
  };

  createLeaf = () => {
    if (this.gameNewSpeed < this.gameSpeedState) {
      this.leafGenerationFactor += this.gameGeneratorVariance;

      this.leafSpeed -= this.gameSpeedState - this.gameNewSpeed;

      this.gameSpeedState = this.gameNewSpeed;
    } else if (this.gameNewSpeed > this.gameSpeedState) {
      this.leafGenerationFactor -= this.gameGeneratorVariance;

      this.leafSpeed += this.gameNewSpeed - this.gameSpeedState;

      this.gameSpeedState = this.gameNewSpeed;
    }

    const isFramesPerSec = this.frames % this.leafGenerationFactor === 0;

    if (this.leafArray.length === 0 || isFramesPerSec) {
      const leaf = new Leaf(0, 0, this.leafSpeed * this.gameSpeedState);

      leaf.x = this.randomizeXPosition(leaf.w);

      this.leafArray.push(leaf);
    }

    this.updateStackSpeed(this.leafArray);
  };

  createPill = () => {
    if (this.gameNewSpeed < this.gameSpeedState) {
      this.pillGenerationFactor += this.gameGeneratorVariance;

      this.pillSpeed -= this.gameSpeedState - this.gameNewSpeed;

      this.gameSpeedState = this.gameNewSpeed;
    } else if (this.gameNewSpeed > this.gameSpeedState) {
      this.pillGenerationFactor -= this.gameGeneratorVariance;

      this.pillSpeed += this.gameNewSpeed - this.gameSpeedState;

      this.gameSpeedState = this.gameNewSpeed;
    }

    const isFramesPerSec = this.frames % this.pillGenerationFactor === 0;

    if (this.pillArray.length === 0 || isFramesPerSec) {
      const pill = new Pill(0, 0, this.pillSpeed * this.gameSpeedState);

      pill.x = this.randomizeXPosition(pill.w);

      this.pillArray.push(pill);
    }

    this.updateStackSpeed(this.pillArray);
  };

  cleanStack = stack => {
    if (stack[0].y + stack[0].h > canvas.height) {
      stack.shift();
    }
  };

  hasCollision = (element, isLoose = false) => {
    const isXCollision =
      element.x < this.character.x + this.character.w &&
      element.x + element.w > this.character.x;

    if (isLoose) {
      return (
        isXCollision &&
        element.y < this.character.y + this.character.h * 0.3 &&
        element.h + element.y > this.character.y + this.character.h * 0.7
      );
    }

    return (
      isXCollision &&
      element.y < this.character.y + this.character.h &&
      element.h + element.y > this.character.y
    );
  };

  handleSkullCollision = () => {
    this.skullArray.forEach((skull, index) => {
      if (this.hasCollision(skull)) {
        this.skullArray.splice(index, 1);
        this.score += skull.points;
      }
    });
  };

  handleLeafCollision = () => {
    this.leafArray.forEach((leaf, index) => {
      if (this.hasCollision(leaf)) {
        this.leafArray.splice(index, 1);

        if (this.gameSpeedState > this.gameSpeedMin) {
          this.gameNewSpeed -= leaf.bonus;
        }
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
      }
    });
  };

  handleWallCollision = () => {
    this.wallArray.forEach(element => {
      if (this.hasCollision(element, true)) this.gameOver();
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
    }, 1000);
  };

  gameLoop = () => {
    // control
    this.frames++;

    // clear
    context.clearRect(0, 0, canvas.width, canvas.height);

    // animation and actions
    this.displayScore();

    this.wallArray.forEach(wall => {
      wall.moveItem();
    });

    this.skullArray.forEach(skull => {
      skull.moveItem();
    });

    this.leafArray.forEach(leaf => {
      leaf.moveItem();
    });

    this.pillArray.forEach(pill => {
      pill.moveItem();
    });

    this.handleWallCollision();
    this.handleSkullCollision();
    this.handleLeafCollision();
    this.handlePillCollision();

    // drawing
    this.gameBackground.drawBackground();

    this.wallArray.forEach(wall => {
      wall.drawWall();
    });

    this.character.drawCharacter();

    this.skullArray.forEach(skull => {
      skull.drawSkull();
    });

    this.leafArray.forEach(leaf => {
      leaf.drawLeaf();
    });

    this.pillArray.forEach(pill => {
      pill.drawPill();
    });

    //spawning
    this.createWall();
    this.createSkull();
    this.createLeaf();
    this.createPill();

    this.cleanStack(this.wallArray);
    this.cleanStack(this.skullArray);
    this.cleanStack(this.leafArray);
    this.cleanStack(this.pillArray);

    // recursion
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
