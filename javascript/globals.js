let game;

const canvas = document.querySelector("#game-canvas");
const splashScreenDOM = document.querySelector("#splash-screen");
const gameoverScreenDOM = document.querySelector("#gameover-screen");

const startBtnDOM = document.querySelector("#start-btn");

const context = canvas.getContext("2d");

const characterW = 50;
const characterH = 50;
const initXPosition = canvas.width / 2 - characterW / 2;
const yPosition = canvas.height - characterH * 2;
