class SkullHigh extends Skull {
  constructor(x, y, speed) {
    super(x, y, speed);
    this.image.src = skullHighPath;
    this.sound = soundSkullHighDOM;
    this.points = 100;
  }

  manageSound = () => {
    this.sound.volume = skullHighVolume;
    this.sound.play();
  };
}
