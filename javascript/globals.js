let game;

const canvas = document.querySelector("#game-canvas");
const context = canvas.getContext("2d");
const characterW = 50;
const characterH = 50;
const initXPosition = canvas.width / 2 - characterW / 2;
const yPosition = canvas.height - characterH * 2;
