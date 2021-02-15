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

// The main function where the canvas is displayed on by invoking the other drawing methods too
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();  
    drawPaddle();  
    drawPaddle2();
    drawLine();

    // To bounce back the ball off of the top and work on the simple AI of making the computer play
    if(y + dy < paddleHeight2 + ballRadius) {
        if((x > paddleX2) && (x < paddleX2 + paddleWidth2)) {
            dy = -dy;                       
        }
        else {
            // Generate a random number and by checking for not to get the paddle out of the canvas rectangle check for a single 
            // number and fail to move to the left to bounce back the ball but move the paddle to a certain place just not enough to bounce the ball.
            let a = Math.floor(Math.random() * (Math.floor(5) - 1) + 1);

            while (paddleX2 > x) { 
                if(a === 5 || a === 1 || a === 4 || a === 2) {
                    paddleX2 -= 7;
                } else {
                    userScore += 1;
                    paddleX2 -= 50;
                    break;
                }                
            }

            while (paddleX2 < x && paddleX2 + paddleWidth2 < canvas.width) {  
                if(a === 4 || a === 1 || a === 3 || a === 2) {
                    paddleX2 += 7;
                } else  {
                    userScore += 1;
                    paddleX2 += 50;
                    break;
                }                
            }

            dy = -dy; 
        }
    } 
    // The paddle off of the bottom of the canvas if the ball is in touch with paddle bounce back else count as a score for computer
    else if((y + dy) > (canvas.height-ballRadius)) {
        if((x > paddleX) && (x < paddleX + paddleWidth)) {
            dy = -dy;
        }
        else {
            compScore += 1;
            dy = -dy;
        }
    }
    // Bounce back the ball off of the vertical sides of the canvas triangle
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }

    // When ever the right button is pressed move the paddle in the right inceasing its place by 7 in the x-direction
    if(rightPressed) {
        paddleX += 7;
        if(paddleX + paddleWidth > canvas.width) {
            paddleX = canvas.width - paddleWidth;
        }
    }
    // When ever the left button is pressed move the paddle in the left decreasing its place by 7 in the x-direction
    else if(leftPressed) {
        paddleX -= 7;
        if(paddleX < 0) {
            paddleX = 0;
        }
    }

    // Update x and y values every time to keep the ball moving
    x += dx;
    y += dy;

}
let interval = setInterval(draw, 10);