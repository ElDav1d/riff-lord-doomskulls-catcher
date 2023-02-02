let game;

const canvas = document.querySelector("#game-canvas");

const gameScreenDOM = document.querySelector("#game-screen");
const splashScreenDOM = document.querySelector("#splash-screen");
const gameoverScreenDOM = document.querySelector("#gameover-screen");

const gameScoreDOM = document.querySelector("#game-score");
const startBtnDOM = document.querySelector("#start-btn");
const restartBtnDOM = document.querySelector("#restart-btn");

const soundSkullDOM = document.querySelector("#audio-skull");
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

const playCursor = 'url("./assets/icons/play-icon.png"), auto';
const pauseCursor = 'url("./assets/icons/pause-icon.png"), auto';
let hasSplashSound = false;
