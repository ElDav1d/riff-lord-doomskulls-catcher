const startGame = () => {
  game = new Game();
  game.gameLoop();

  splashScreenDOM.style.display = "none";
  gameoverScreenDOM.style.display = "none";
  canvas.style.display = "block";

};

const handleCharacterMove = event => {
  if (event.code === "ArrowLeft") {
    game.character.moveLeft();
  }

  if (event.code === "ArrowRight") {
    game.character.moveRigth();
  }
};

startBtnDOM.addEventListener("click", startGame);

window.addEventListener("keydown", handleCharacterMove);
