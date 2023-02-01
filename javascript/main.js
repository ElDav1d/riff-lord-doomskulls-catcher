const initScreens = () => {
  splashScreenDOM.style.display = "none";
  gameoverScreenDOM.style.display = "none";
  gameScreenDOM.style.display = "block";
};

const initGameSounds = () => {
  soundGameDOM.loop = true;
  soundGameDOM.volume = backgroundVolume;
  soundGameDOM.play();
};

const stopSplashSound = () => {
  soundSplashDOM.pause();
  soundSplashDOM.currentTime = 0;
};

const initSplashSound = () => {
  splashScreenDOM.style.cursor = pauseCursor;
  soundSplashDOM.volume = backgroundVolume;
  soundSplashDOM.loop = true;
  soundSplashDOM.play();
};

const pauseSplashSound = () => {
  splashScreenDOM.style.cursor = playCursor;
  soundSplashDOM.pause();
};

const startGame = () => {
  game = new Game();
  game.gameLoop();

  initScreens();
  stopSplashSound();
  initGameSounds();
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

const handleSplashMouseover = event => {
  if (event.target === splashScreenDOM && !splashScreenDOM.style.cursor) {
    splashScreenDOM.style.cursor = playCursor;
  }
};

const handleSplashClick = () => {
  hasSplashSound = !hasSplashSound;

  if (hasSplashSound) {
    pauseSplashSound();
  } else {
    initSplashSound();
  }
};

splashScreenDOM.addEventListener("click", handleSplashClick, true);

startBtnDOM.addEventListener("click", startGame);
restartBtnDOM.addEventListener("click", restartGame);

window.addEventListener("keydown", event => {
  handleMoveKey(event);
});

window.addEventListener("keyup", event => {
  handleMoveKey(event);
});

window.addEventListener("mouseover", handleSplashMouseover, true);
