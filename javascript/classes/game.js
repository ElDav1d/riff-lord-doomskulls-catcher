class Game {
  constructor() {
    this.tony = new Character();
    this.frames = 1;
    this.isGameOn = true;
  }
 
  getStartPosition = () => {
    const centerXPosition = (canvas.width / 2)  - (this.w/2);

    this.tony.x = centerXPosition
    this.tony.y = canvas.width - this.tony.h
  }


  gameLoop = () => {
    // control
    this.frames++;

    // clear
    context.clearRect(0, 0, canvas.width, canvas.height);

    // animation and actions

    // drawing
    this.tony.drawCharacter();
    this.getStartPosition()

    // recursion
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
