class Character {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.w = 50;
    this.h = 50;
    this.speed = 10;
  }

  drawCharacter = () => {
    const centerXPosition = (canvas.width / 2)  - (this.w / 2);
    const yPosition = canvas.height - (this.h * 2)
    context.fillStyle = "white";
    context.fillRect(centerXPosition, yPosition, this.w, this.h);    
  };
}
