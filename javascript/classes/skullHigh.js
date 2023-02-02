class SkullHigh extends Skull {
  constructor(x, y, speed) {
    super(x, y, speed);
    this.image.src = SKULL_HIGH_PATH;
    this.sound = soundSkullHighDOM;
    this.points = 100;
  }

  manageSound = () => {
    this.sound.volume = SKULL_HIGH_VOLUME;
    this.sound.play();
  };
}
