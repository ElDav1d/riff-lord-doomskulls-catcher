const startGame = () => {
  game = new Game();
  game.gameLoop();

  splashScreenDOM.style.display = "none";
  gameoverScreenDOM.style.display = "none";
  gameScreenDOM.style.display = "block";

  // soundSplashDOM.pause();
  // soundSplashDOM.currentTime = 0;
  game.gameSoundFX.forEach(effect => {
    effect.volume = fXVolume;
  });

  soundGameDOM.loop = true;
  soundGameDOM.volume = backgroundVolume;
  soundGameDOM.play();
};

const restartGame = () => {
  gameoverScreenDOM.style.display = "none";
  startGame();
};

const handleMoveKey = event => {
  const move = event.code.toLowerCase().slice(5);

  if (game && event.type === "keyup") {
    game.characterMoves[move] = false;
  }

  if (game && event.type === "keydown") {
    game.characterMoves[move] = true;
  }
};

// splashScreenDOM.addEventListener("click", () => {
//   soundSplashDOM.loop = true;
//   soundSplashDOM.play();
// });

startBtnDOM.addEventListener("click", startGame);
restartBtnDOM.addEventListener("click", restartGame);

window.addEventListener("keydown", event => {
  handleMoveKey(event);
});

window.addEventListener("keyup", event => {
  handleMoveKey(event);
});
