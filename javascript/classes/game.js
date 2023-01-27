class Game {
  constructor() {
    this.frames = 1;
    this.isGameOn = true;
  }

  gameLoop = () => {
    // control
    this.frames++;

    // clear

    // animation and actions

    // drawing

    // recursion
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
