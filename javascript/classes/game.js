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
    this.wallGapFactor = 350;
    this.wallGapVariance = 1.5;
    this.wallSpeed = 4

    this.item = new Item(canvas.width / 2, 0, 20, 20, 5);
    this.frames = 1;
    this.isGameOn = true;
  }

  randomizeWallGap = () => {
    const isLeftStarting = Math.round(Math.random());
    const randomVariance =
      Math.round(Math.random() * 100) * this.wallGapVariance;

    if (isLeftStarting) {
      return -this.wallGapFactor + randomVariance;
    } else {
      return this.wallGapFactor + randomVariance;
    }
  };
  

  createWalls = () => {
    const isFramesPerSec = this.frames % this.wallGenerationFactor === 0;

    if (this.wallArray.length === 0 || isFramesPerSec) {
      const wall = new Wall(this.randomizeWallGap(), 30, this.wallSpeed);
      this.wallArray.push(wall);
    }
  };

  cleanStack = array => {
    if (array[0].y + array[0].h > canvas.height) {
      array.shift();
    }
  }

  gameLoop = () => {
    // control
    this.frames++;

    // clear
    context.clearRect(0, 0, canvas.width, canvas.height);

    // animation and actions
    this.wallArray.forEach(wall => {
      wall.moveWall();
    });
    this.item.moveItem();

    // drawing
    this.character.drawCharacter();
    this.item.drawItem();
    this.wallArray.forEach(wall => {
      wall.drawWall();
    });

    //spawning
    this.createWalls();
    this.cleanStack(this.wallArray);

    // recursion
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
