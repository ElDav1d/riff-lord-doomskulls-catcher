class FallingItem {
  constructor(positionX, positionY, itemSpeed) {
    this.x = positionX;
    this.y = positionY;
    this.speed = itemSpeed;
    this.image = new Image();
    this.image.src = "";
    this.sound = {};
  }

  drawItem = () => {
    context.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  moveItem = () => {
    this.y += this.speed;
  };

  cleanSoundFx = array => {
    array.forEach(sound => {
      sound.pause();
      sound.currentTime = 0;
    });
  };

  stackSound = array => {
    if (!array.includes(this.sound)) {
      array.push(this.sound);
    }
  };

  manageSound = () => {
    this.sound.volume = FX_VOLUME;
    this.sound.play();
  };
}
