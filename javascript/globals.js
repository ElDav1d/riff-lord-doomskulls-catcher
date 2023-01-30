let game;

const canvas = document.querySelector("#game-canvas");

const gameScreenDOM = document.querySelector("#game-screen");
const splashScreenDOM = document.querySelector("#splash-screen");
const gameoverScreenDOM = document.querySelector("#gameover-screen");

const gameScoreDOM = document.querySelector("#game-score");
const startBtnDOM = document.querySelector("#start-btn");
const restartBtnDOM = document.querySelector("#restart-btn");

const context = canvas.getContext("2d");

const characterW = 55;
const characterH = 66;
const initXPosition = canvas.width / 2 - characterW / 2;
const yPosition = canvas.height - characterH * 2;
