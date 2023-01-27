class Item {
  constructor(positionX, positionY, itemW, itemH, itemSpeed) {
    this.x = positionX;
    this.y = positionY;
    this.w = itemW;
    this.h = itemH;
    this.speed = itemSpeed;
  }

  drawItem = () => {
    context.fillStyle = "red";
    context.fillRect(this.x, this.y, this.w, this.h);
  }

  moveItem = () => {
    this.y += this.speed;
  }
}
