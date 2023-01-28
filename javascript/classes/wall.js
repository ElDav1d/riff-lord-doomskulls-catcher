class Wall {
  constructor(positionX, positionY, speed = 4) {
    this.x = positionX;
    this.y = positionY;
    this.w = 600;
    this.h = 30;
    this.speed = speed;
  }

  drawWall = () => {
    context.fillStyle = "white";
    context.fillRect(this.x, this.y, this.w, this.h);
  };

  moveWall = () => {
    this.y += this.speed;
  }
}

