class Character {
  constructor(positionX, positionY, charaterW, characterH) {
    this.x = positionX;
    this.y = positionY;
    this.w = charaterW;
    this.h = characterH;
    this.speed = 20;
  }

  drawCharacter = () => {
    context.fillStyle = "white";
    context.fillRect(this.x, this.y, this.w, this.h);
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
