class Game {
  constructor() {
    this.character = new Character(
      initXPosition,
      yPosition,
      characterW,
      characterH
    );
    this.wallArray = [];
    this.wallGapFactor = 350;
    this.wallGapVariance = 1.5;
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
    const passed1sec = this.frames % 60 === 0;

    if (this.wallArray.length === 0 || passed1sec) {
      const wall = new Wall(this.randomizeWallGap(), 30);
      this.wallArray.push(wall);
    }
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
    this.item.moveItem();

    // drawing
    this.character.drawCharacter();
    this.createWalls();
    this.wallArray.forEach(wall => {
      wall.drawWall();
    });
    this.item.drawItem();

    // recursion
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
