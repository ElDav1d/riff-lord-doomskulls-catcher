class Game {
  constructor() {
    this.character = new Character(initXPosition, yPosition, characterW, characterH);
    this.wall = new Wall(0, 30);
    this.frames = 1;
    this.isGameOn = true;
  }

  gameLoop = () => {
    // control
    this.frames++;

    // clear
    context.clearRect(0, 0, canvas.width, canvas.height);

    // animation and actions
    this.wall.moveWall();

    // drawing
    this.character.drawCharacter();
    this.wall.drawWall()

    // recursion
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
