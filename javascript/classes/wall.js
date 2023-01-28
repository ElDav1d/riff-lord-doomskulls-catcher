class Wall extends FallingItem {
  constructor(x, y, speed) {
    super(x, y, speed);
    this.w = 600;
    this.h = 30;
  }

  drawWall = () => {
    context.fillStyle = "white";
    context.fillRect(this.x, this.y, this.w, this.h);
  };
}
