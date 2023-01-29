class Skull extends FallingItem {
  constructor(x, y, speed) {
    super(x, y, speed);
    this.w = 30;
    this.h = 30;
    this.points = 1;
  }

  drawSkull = () => {
    context.fillStyle = "red";
    context.fillRect(this.x, this.y, this.w, this.h);
  };
}
