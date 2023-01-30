class Character {
  constructor(positionX, positionY, characterW, characterH) {
    this.x = positionX;
    this.y = positionY;
    this.w = characterW;
    this.h = characterH;
    this.speed = 60;
    this.image = new Image();
    this.image.src = "./assets/images/tony.png";
  }

  drawCharacter = () => {
    context.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  moveLeft = () => {
    if (this.x > 0) {
      this.x -= this.speed;
    }
  };

  moveRigth = () => {
    if (this.x + this.w < canvas.width) {
      this.x += this.speed;
    }
  };
}
