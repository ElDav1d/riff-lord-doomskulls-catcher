class Wall extends FallingItem {
  constructor(x, y, speed) {
    super(x, y, speed);
    this.w = 600;
    this.h = 32;
    this.image = new Image();
    this.image.src = "./assets/images/wall.gif";
  }

  drawWall = () => {
    context.drawImage(this.image, this.x, this.y, this.w, this.h);
  };
}
