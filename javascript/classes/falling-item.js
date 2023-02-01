class FallingItem {
  constructor(positionX, positionY, itemSpeed) {
    this.x = positionX;
    this.y = positionY;
    this.speed = itemSpeed;
    this.sound = {};
  }

  moveItem = () => {
    this.y += this.speed;
  };

  cleanSoundFx = array => {
    array.forEach(sound => {
      sound.pause();
      sound.currentTime = 0;
    });
  };

  manageSound = array => {
    this.cleanSoundFx(array);

    this.sound.volume = fxVolume;
    this.sound.play();

    if (!array.includes(this.sound)) {
      array.push(this.sound);
    }
  };
}
