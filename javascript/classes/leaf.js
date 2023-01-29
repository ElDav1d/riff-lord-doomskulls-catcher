class Leaf extends FallingItem {
  constructor(x, y, speed) {
    super(x, y, speed);
    this.w = 40;
    this.h = 40;
    this.bonus = 0.25;
  }

  drawLeaf = () => {
    context.fillStyle = "green";
    context.fillRect(this.x, this.y, this.w, this.h);
  };

  slowDownGame = gameSpeed => (gameSpeed -= this.bonus);
}
