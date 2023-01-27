class Game {
  constructor() {
    this.character = new Character(initXPosition, yPosition, characterW, characterH);
    this.frames = 1;
    this.isGameOn = true;
  }

  gameLoop = () => {
    // control
    this.frames++;

    // clear
    context.clearRect(0, 0, canvas.width, canvas.height);

    // animation and actions

    // drawing
    this.character.drawCharacter();

    // recursion
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
