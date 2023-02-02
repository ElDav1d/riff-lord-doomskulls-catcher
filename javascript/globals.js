let game;

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

const characterW = 55;
const characterH = 66;
const initXPosition = canvas.width / 2 - characterW / 2;
const yPosition = canvas.height - characterH * 2;

const backgroundVolume = 0.045;
const fxVolume = 0.05;
const skullHighVolume = 0.075;

const playIconPath = "./assets/icons/play-icon.png";
const pauseIconPath = "./assets/icons/pause-icon.png";
const skullHighPath = "./assets/images/skullHigh.png";
const skullMidPath = "./assets/images/skullMid.png";
const skullLowPath = "./assets/images/skullLow.png";

const playCursor = `url(${playIconPath}), auto`;
const pauseCursor = `url(${pauseIconPath}), auto`;
let hasSplashSound = false;
