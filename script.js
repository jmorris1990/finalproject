let canvas;
let ctx;

//player position and size
let playerX;
let playerY;
let playerWidth = 20;
let playerHeight = 20;

//fruit position, size, and velocity
let fruitX;
let fruitY;
let fruitWidth = 10;
let fruitHeight = 10;
let fruitdX = (Math.round(Math.random()) * 2 - 1) * 3;
let fruitdY = (Math.round(Math.random()) * 2 - 1) * 3;


let countDown = 60 * 1;

// character's movement
let leftArrowPressed = false;
let rightArrowPressed = false;
let downArrowPressed = false;
let upArrowPressed = false;

let score = 0;

//initialize game
window.onload = function () {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    startPlayer();
    startFruit();
    drawScore();
    //60 frames per second refresh entire game loop
    setInterval(loop, 1000 / 60);
        display = document.querySelector('#time');
    startTimer(countDown, display);

};
// score
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = 'blue';
    ctx.fillText("Score: "+score, 8, 20);
}

// timer

const startTimer = (duration, display) => {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}


let startPlayer = () => {
    playerX = canvas.clientWidth / 2;
    playerY = canvas.height / 2;
};

let drawCanvas = () => {
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
};

const drawPlayer = () => {
    ctx.fillStyle = 'black';
    ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
};

const drawFruit = () => {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(fruitX, fruitY, fruitWidth, fruitHeight);
};

const startFruit = () => {
    fruitX = Math.random() * 500;
    fruitY = Math.random() * 500;
};

const moveFruit = () => {
    fruitX += fruitdX;
    fruitY += fruitdY;
    if (fruitX > canvas.width) {
        fruitX = 0;
    } if (fruitY > canvas.height) {
        fruitY = 0;
    }  if (fruitX < 0) {
        fruitX = canvas.width;
    } if (fruitY < 0) {
        fruitY = canvas.height;
    } 
};


function control() {

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    //takes keyboard input
    function keyDownHandler(e) {
        if (e.keyCode == 39) {
            rightArrowPressed = true;
        } else if (e.keyCode == 37) {
            leftArrowPressed = true;
        } else if (e.keyCode == 38) {
            upArrowPressed = true;
        } else if (e.keyCode == 40) {
            downArrowPressed = true;
        }
    }

    function keyUpHandler(e) {
        if (e.keyCode == 39) {
            rightArrowPressed = false;
        } else if (e.keyCode == 37) {
            leftArrowPressed = false;
        } else if (e.keyCode == 38) {
            upArrowPressed = false;
        } else if (e.keyCode == 40) {
            downArrowPressed = false;
        }
    }

}
//moves player square based on values from keyboard input
const movePlayer = () => {
    if (rightArrowPressed === true) {
        playerX += 5;
        if (playerX >= canvas.width) {
            playerX -= 5;
        }
    }
    if (leftArrowPressed === true) {
        playerX -= 5;
        if (playerX <= 0) {
            playerX -= playerX;
        }
    }
    if (upArrowPressed === true) {
        playerY -= 5;
        if (playerY <= 0) {
            playerY += 5;
        }
    }
    if (downArrowPressed === true) {
        playerY += 5;
        if (playerY >= canvas.height) {
            playerY -= 5;
        }
    }
};


const collision = () => {
    //detect location of player and fruit and if they intersect
    if (playerX < fruitX + fruitWidth &&
        playerX + playerWidth > fruitX &&
        playerY < fruitY + fruitHeight &&
        playerHeight + playerY > fruitY) {
        //change position of fruit
        startFruit();
        score ++;
        fruitdX = (Math.round(Math.random()) * 2 - 1) * 2;
        ruitdY = (Math.round(Math.random()) * 2 - 1) * 2;
        //increment score
    }
}
  
//game loop
const loop = () => {
    drawCanvas();
    drawFruit();
    drawPlayer();
    control();
    movePlayer();
    moveFruit();
    drawScore();
    collision();
};

module.exports = {collision};