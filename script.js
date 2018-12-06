let canvas;
let ctx;

let playerX;
let playerY;

let fruitX;
let fruitY;

let fiveMinutes = 60 * 5;

// character's movement
let leftArrowPressed = false;
let rightArrowPressed = false;
let downArrowPressed = false;
let upArrowPressed = false;

// timer

function startTimer(duration, display) {
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

//initialize game
window.onload = function () {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    //60 frames per second refresh
    playerStart();
    setInterval(loop, 1000 / 60);
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);

};

let playerStart = () => {
    playerX = canvas.clientWidth / 2;
    playerY = canvas.height / 2;
};

let drawCanvas = () => {
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
};

let drawPlayer = () => {
    ctx.fillStyle = 'black';
    ctx.fillRect(playerX, playerY, 50, 50);
};

let drawFruit = () => {
    fruitX = 50;
    fruitY = 50;
    ctx.fillStyle = 'yellow';
    ctx.fillRect(fruitX, fruitY, 10, 10);
};

function control() {

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

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

function movePlayer() {
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
}
//game loop
let loop = () => {
    drawCanvas();
    drawPlayer();
    drawFruit();
    control();
    movePlayer();
};