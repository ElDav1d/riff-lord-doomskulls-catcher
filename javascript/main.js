const startGame = () => {
  game = new Game();
  game.gameLoop();
};

window.addEventListener("load", startGame);
