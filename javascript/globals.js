let game;
let hasSplashSound = false;

const canvas = document.querySelector("#game-canvas");

const gameScreenDOM = document.querySelector("#game-screen");
const splashScreenDOM = document.querySelector("#splash-screen");
const gameoverScreenDOM = document.querySelector("#gameover-screen");

const gameScoreDOM = document.querySelector("#game-score");
const startBtnDOM = document.querySelector("#start-btn");
const restartBtnDOM = document.querySelector("#restart-btn");

const soundSkullHighDOM = document.querySelector("#audio-skull-high");
const soundSkullMidDOM = document.querySelector("#audio-skull-mid");
const soundSkullLowDOM = document.querySelector("#audio-skull-low");
const soundWallDOM = document.querySelector("#audio-wall");
const soundLeafDOM = document.querySelector("#audio-leaf");
const soundPillDOM = document.querySelector("#audio-pill");
const soundGameDOM = document.querySelector("#audio-game");
const soundSplashDOM = document.querySelector("#audio-splash");

const context = canvas.getContext("2d");

const CHARACTER_WIDTH = 55;
const CHARACTER_HEIGHT = 66;
const CHARACTER_INMUNITY_LAPSE = 3;
const INIT_X_POSITION = canvas.width / 2 - CHARACTER_WIDTH / 2;
const Y_POSITION = canvas.height - CHARACTER_HEIGHT * 2;

const BACKGROUND_VOLUME = 0.045;
const FX_VOLUME = 0.05;
const SKULL_HIGH_VOLUME = 0.075;

const CHARACTER_IMAGE_PATH = "./assets/images/tony.png";
const CHARACTER_INMUNE_IMAGE_PATH = "./assets/images/tony-inmune.png";
const ICON_PLAY_PATH = "./assets/icons/play-icon.png";
const ICON_PAUSE_PATH = "./assets/icons/pause-icon.png";
const SKULL_HIGH_PATH = "./assets/images/skullHigh.png";
const SKULL_MID_PATH = "./assets/images/skullMid.png";
const SKULL_LOW_PATH = "./assets/images/skullLow.png";

const CURSOR_PLAY = `url(${ICON_PLAY_PATH}), auto`;
const CURSOR_PAUSE = `url(${ICON_PAUSE_PATH}), auto`;
