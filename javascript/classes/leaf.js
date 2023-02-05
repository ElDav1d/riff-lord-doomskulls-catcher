class Leaf extends FallingItem {
  constructor(x, y, speed) {
    super(x, y, speed);
    this.w = 40;
    this.h = 42;
    this.bonus = 0.25;
    this.image = new Image();
    this.image.src = LEAF_PATH;
    this.sound = soundLeafDOM;
  }
}
