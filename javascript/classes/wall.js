class Wall {
  constructor(positionX, positionY) {
    this.x = positionX;
    this.y = positionY;
    this.w = 600;
    this.h = 30;
    this.speed = 4; 
  }

  drawWall = () => {
    context.fillStyle = "white";
    context.fillRect(this.x, this.y, this.w, this.h);
  };

  moveWall = () => {
    this.y += this.speed;
  }
}

