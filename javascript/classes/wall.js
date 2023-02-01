class Wall extends FallingItem {
  constructor(x, y, speed) {
    super(x, y, speed);
    this.w = 600;
    this.h = 33;
    this.image = new Image();
    this.image.src = "./assets/images/wall.gif";
    this.sound = soundWallDOM;
  }

  drawWall = () => {
    context.drawImage(this.image, this.x, this.y, this.w, this.h);
  };
}
