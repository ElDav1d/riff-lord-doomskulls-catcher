class SkullLow extends Skull {
  constructor(x, y, speed) {
    super(x, y, speed);

    this.image.src = SKULL_LOW_PATH;
    this.sound = soundSkullLowDOM;
    this.points = 1;
  }
}
