const startGame = () => {
  game = new Game();
  game.gameLoop();

  splashScreenDOM.style.display = "none";
  gameoverScreenDOM.style.display = "none";
  gameScreenDOM.style.display = "block";
};

const restartGame = () => {
  gameoverScreenDOM.style.display = "none";
  startGame();
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
restartBtnDOM.addEventListener("click", restartGame);

window.addEventListener("keydown", handleCharacterMove);
