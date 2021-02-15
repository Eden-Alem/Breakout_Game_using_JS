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
