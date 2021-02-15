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

// Reload the page on the button restart being clicked
function restartGame(e) {
    document.location.reload();
    clearInterval(interval);
}

// Remove canvas and other elements and display result of user and computer based on conditions
function endGame(e) {    
    canvas.remove();
    end.remove();
    restart.textContent = `Play again`;
    restart.style.width = '10rem';
    worl.style.height = '150px';
    named.textContent = `AND Breakout Game`;
    named.style.padding = "20px";
    if (userScore > compScore) {
        worl.textContent = `${userScore} - ${compScore}:
        Congratulations! :) You have won!`;        
    } else if (compScore > userScore) {
        worl.textContent = `${userScore} - ${compScore}:
        You lost! :( Try again`;
    } else {
        worl.textContent = `${userScore} - ${compScore}: It's a tie! Try again`;
    }    
}

// Draw the ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

// Draw two paddles in which one is used by the user and the other by the computer
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.font = "30px Arial";
    ctx.fillText(compScore, 10, 50);
    ctx.closePath();
    
}

function drawPaddle2() {
    ctx.beginPath();
    ctx.rect(paddleX2, paddleHeight2 - 7, paddleWidth2, paddleHeight2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.font = "30px Arial";
    ctx.fillText(userScore, 10, 250);
    ctx.closePath();
}

// Draw a line in the middle of the canvas rectangle as a middle line border
function drawLine() {
    ctx = canvas.getContext('2d');
    ctx.beginPath(); 
    ctx.moveTo(0,canvas.height/2);
    ctx.lineTo(canvas.width,canvas.height/2);
    ctx.strokeStyle = "white";
    ctx.stroke();
}
