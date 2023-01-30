class Pill extends FallingItem {
  constructor(x, y, speed) {
    super(x, y, speed);
    this.w = 25;
    this.h = 25;
    this.malus = 0.05;
    this.image = new Image();
    this.image.src = "./assets/images/pill.png";
  }

  drawPill = () => {
    context.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  speedUpGame = gameSpeed => (gameSpeed += this.malus);
}
