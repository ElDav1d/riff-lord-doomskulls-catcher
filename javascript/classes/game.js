class Game {
  constructor() {
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

    this.itemArray = [];
    this.itemSize = 30;
    this.itemSpeed = 5;
    this.itemGenerationFactor = 60;

    this.frames = 1;
    this.isGameOn = true;
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

  createWalls = () => {
    const isFramesPerSec = this.frames % this.wallGenerationFactor === 0;

    if (this.wallArray.length === 0 || isFramesPerSec) {
      const wall = new Wall(this.randomizeWallGap(), 0, this.wallSpeed);
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

  createItems = () => {
    const isFramesPerSec = this.frames % this.itemGenerationFactor === 0;

    if (this.itemArray.length === 0 || isFramesPerSec) {
      const item = new Item(
        this.randomizeXPosition(this.itemSize),
        0,
        this.itemSize,
        this.itemSize,
        this.itemSpeed
      );

      this.itemArray.push(item);
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

  handleItemCollision = () => {
    this.itemArray.forEach(element => {
      if (this.hasCollision(element)) console.log("skull");
    });
  };

  handleWallCollision = () => {
    this.wallArray.forEach(element => {
      if (this.hasCollision(element)) this.gameOver();
    });
  };

  gameOver = () => {
    this.isGameOn = false;

    setTimeout(() => {
      canvas.style.display = "none";

      gameoverScreenDOM.style.display = "flex";
    }, 1000);
  };

  gameLoop = () => {
    // control
    this.frames++;

    // clear
    context.clearRect(0, 0, canvas.width, canvas.height);

    // animation and actions
    this.wallArray.forEach(wall => {
      wall.moveWall();
    });

    this.itemArray.forEach(item => {
      item.moveItem();
    });

    this.handleWallCollision();
    this.handleItemCollision();

    // drawing
    this.character.drawCharacter();
    this.wallArray.forEach(wall => {
      wall.drawWall();
    });
    this.itemArray.forEach(item => {
      item.drawItem();
    });

    //spawning
    this.createWalls();
    this.createItems();
    this.cleanStack(this.wallArray);
    this.cleanStack(this.itemArray);

    // recursion
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
