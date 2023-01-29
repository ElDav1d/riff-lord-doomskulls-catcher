class Game {
  constructor() {
    this.frames = 1;
    this.isGameOn = true;
    this.score = 0;
    this.gameSpeed = 1;
    this.gameSpeedMin = 0.5;

    this.character = new Character(
      initXPosition,
      yPosition,
      characterW,
      characterH
    );

    this.wallArray = [];
    this.wallGenerationFactor = 60;
    this.wallGapFactor = 200;
    this.wallGapVariance = 1.5;
    this.wallSpeed = 4;

    this.skullArray = [];
    this.skullSpeed = 5;
    this.skullGenerationFactor = 60;

    this.leafArray = [];
    this.leafSpeed = 3;
    this.leafGenerationFactor = 120;
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

  createWall = () => {
    const isFramesPerSec =
      this.frames % (this.wallGenerationFactor * this.gameSpeed) === 0;

    if (this.wallArray.length === 0 || isFramesPerSec) {
      const wall = new Wall(0, 0, this.wallSpeed * this.gameSpeed);

      wall.x = this.randomizeWallGap();

      this.wallArray.push(wall);
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

  createSkull = () => {
    const isFramesPerSec = this.frames % this.skullGenerationFactor === 0;

    if (this.skullArray.length === 0 || isFramesPerSec) {
      const skull = new Skull(0, 0, this.skullSpeed * this.gameSpeed);

      skull.x = this.randomizeXPosition(skull.w);

      this.skullArray.push(skull);
    }
  };

  createLeaf = () => {
    const isFramesPerSec = this.frames % this.leafGenerationFactor === 0;

    if (this.leafArray.length === 0 || isFramesPerSec) {
      const leaf = new Leaf(0, 0, this.leafSpeed * this.gameSpeed);

      leaf.x = this.randomizeXPosition(leaf.w);

      this.leafArray.push(leaf);
    }
  };

  cleanStack = stack => {
    if (stack[0].y + stack[0].h > canvas.height) {
      stack.shift();
    }
  };

  hasCollision = element => {
    return (
      element.x < this.character.x + this.character.w &&
      element.x + element.w > this.character.x &&
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

        if (this.gameSpeed >= this.gameSpeedMin) {
          console.log(this.gameSpeed);
          this.gameSpeed = leaf.slowGame(this.gameSpeed);
        }
      }
    });
  };

  handleWallCollision = () => {
    this.wallArray.forEach(element => {
      if (this.hasCollision(element)) this.gameOver();
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

    this.handleWallCollision();
    this.handleSkullCollision();
    this.handleLeafCollision();

    // drawing

    this.character.drawCharacter();

    this.wallArray.forEach(wall => {
      wall.drawWall();
    });

    this.skullArray.forEach(skull => {
      skull.drawSkull();
    });

    this.leafArray.forEach(leaf => {
      leaf.drawLeaf();
    });

    //spawning
    this.createWall();
    this.createSkull();
    this.createLeaf();
    this.cleanStack(this.wallArray);
    this.cleanStack(this.skullArray);
    this.cleanStack(this.leafArray);

    // recursion
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
