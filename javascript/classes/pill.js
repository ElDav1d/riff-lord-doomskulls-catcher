class Pill extends FallingItem {
  constructor(x, y, speed) {
    super(x, y, speed);
    this.w = 25;
    this.h = 26;
    this.malus = 0.25;
    this.image = new Image();
    this.image.src = PILL_PATH;
    this.sound = soundPillDOM;
  }
}
