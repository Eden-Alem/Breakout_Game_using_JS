// Declared UIs
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
const restart = document.querySelector("#restart");
const end = document.querySelector("#end");
const buttons = document.querySelector("#buttons");
const worl = document.querySelector("#winorlose");
const named = document.querySelector("#name");

restart.addEventListener('click', restartGame);
end.addEventListener('click', endGame);

let y = canvas.width / 2;
let x = canvas.height - 30;
let dy = 2;
let dx = -2;

let ballRadius = 10;

let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
let paddleHeight2 = 10;
let paddleWidth2 = 75;
let paddleX2 = (canvas.width - paddleWidth) / 2;

let rightPressed = false;
let leftPressed = false;

let userScore = 0;
let compScore = 0;
