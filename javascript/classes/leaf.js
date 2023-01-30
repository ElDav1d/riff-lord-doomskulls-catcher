class Leaf extends FallingItem {
  constructor(x, y, speed) {
    super(x, y, speed);
    this.w = 40;
    this.h = 40;
    this.bonus = 0.25;
    this.image = new Image();
    this.image.src = "./assets/images/leaf.png";
  }

  drawLeaf = () => {
    context.drawImage(this.image, this.x, this.y, this.w, this.h);
  };
}
