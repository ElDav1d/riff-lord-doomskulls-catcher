class Skull extends FallingItem {
  constructor(x, y, speed) {
    super(x, y, speed);
    this.w = 40;
    this.h = 65;
    this.points = 1;
    this.image = new Image();
    this.image.src = "./assets/images/skull.png";
    this.sound = soundSkullDOM;
  }

  drawSkull = () => {
    context.drawImage(this.image, this.x, this.y, this.w, this.h);
  };
}
