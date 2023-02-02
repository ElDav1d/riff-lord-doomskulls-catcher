class SkullLow extends Skull {
  constructor(x, y, speed) {
    super(x, y, speed);

    this.image.src = skullLowPath;
    this.sound = soundSkullLowDOM;
    this.points = 1;
  }
}
