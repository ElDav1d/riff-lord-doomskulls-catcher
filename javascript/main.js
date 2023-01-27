const startGame = () => {
  game = new Game();
  game.gameLoop();
};

const handleCharacterMove = event => {
  if (event.code === "ArrowLeft") {
    game.character.moveLeft();
  }

  if (event.code === "ArrowRight") {
    game.character.moveRigth();
  }
};

window.addEventListener("load", startGame);

window.addEventListener("keydown", handleCharacterMove);
