class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.w = 600;
    this.h = 800;
    this.image = new Image();
    this.image.src = "./assets/images/background_graveyard800.gif";
  }

  drawBackground = () => {
    context.drawImage(this.image, this.x, this.y, this.w, this.h);
  };
}
