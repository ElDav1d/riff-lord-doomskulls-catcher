class Game {
  constructor() {
    this.character = new Character(
      initXPosition,
      yPosition,
      characterW,
      characterH
    );
    this.wallArray = [];
    this.item = new Item(canvas.width / 2 , 0, 20, 20, 5);
    this.frames = 1;
    this.isGameOn = true;
  }

  createWalls = () => {
    const hadPassed2Seconds = this.frames % 120 === 0;

    if (this.wallArray.length === 0 || hadPassed2Seconds) {
      const wall = new Wall(0, 30)
      this.wallArray.push(wall);
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
    })
    this.item.moveItem()

    // drawing
    this.character.drawCharacter();
    this.createWalls();
    this.wallArray.forEach(wall => {
      wall.drawWall();
    })
    this.item.drawItem();

    // recursion
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
