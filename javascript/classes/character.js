class Character {
  constructor(positionX, positionY, characterW, characterH) {
    this.x = positionX;
    this.y = positionY;
    this.w = characterW;
    this.h = characterH;
    this.speed = 10;
    this.image = new Image();
    this.image.src = "./assets/images/tony.png";
  }

  drawCharacter = () => {
    context.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  moveLeft = () => {
    if (this.x > this.speed) {
      this.x -= this.speed;
    } else {
      this.x = 0;
    }
  };

  moveRigth = () => {
    if (this.x + this.w < canvas.width - this.speed) {
      this.x += this.speed;
    } else {
      this.x = canvas.width - this.w;
    }
  };
}
