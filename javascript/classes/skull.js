class Skull extends Item {
  constructor(x, y, w, h, speed, color) {
    super(x, y, w, h, speed);
    this.color = color;
  }

  drawItem = () => {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.w, this.h);
  };
}
