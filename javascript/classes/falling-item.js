class FallingItem {
  constructor(positionX, positionY, itemSpeed) {
    this.x = positionX;
    this.y = positionY;
    this.speed = itemSpeed;
  }

  moveItem = () => {
    this.y += this.speed;
  };
}
