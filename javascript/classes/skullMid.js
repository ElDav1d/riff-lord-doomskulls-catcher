class SkullMid extends Skull {
  constructor(x, y, speed) {
    super(x, y, speed);

    this.image.src = SKULL_MID_PATH;
    this.sound = soundSkullMidDOM;
    this.points = 10;
  }
}
