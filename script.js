let canvas;
let ctx;

//player location
let playerX;
let playerY;

//fruit location and velocity
let fruitX;
let fruitY;
let fruitdX = (Math.round(Math.random()) * 2 - 1) * 2;
let fruitdY = (Math.round(Math.random()) * 2 - 1) * 2;

//spawn conditions
let spawnBoundaryTop;
let spawnBoundaryBottom;
let spawnBoundaryLeft;
let spawnBoundaryRight;

let spawnRate = 2000;
let lastSpawn = -1;
let spawnedFruits = [];
let startT = Date.now();

// character's movement
let leftArrowPressed = false;
let rightArrowPressed = false;
let downArrowPressed = false;
let upArrowPressed = false;

//initialize game
window.onload = function () {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    startPlayer();
    startFruit();
    //60 frames per second refresh entire game loop
    setInterval(loop, 1000 / 60);
};

let drawCanvas = () => {
    ctx.fillStyle = 'grey'
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};

const drawPlayer = () => {
    ctx.fillStyle = 'black';
    ctx.fillRect(playerX, playerY, 100, 100);
};

const startPlayer = () => {
    playerX = canvas.width / 2;
    playerY = canvas.height / 2;
};

const drawFruit = () => {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(fruitX, fruitY, 10, 10);
};

const startFruit = () => {
    fruitX = Math.random() * 500;
    fruitY = Math.random() * 500;
}

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

};

function movePlayer() {
    if (rightArrowPressed === true) {
        playerX += 50;
    }
    if (leftArrowPressed === true) {
        playerX -= 50;
    }
    if (upArrowPressed === true) {
        playerY += 50;
    }
    if (downArrowPressed === true) {
        playerY -= 50;
    }
};


//game loop
const loop = () => {
    drawCanvas();
    drawFruit();
    drawPlayer();
    control();
    movePlayer();
    moveFruit();
    console.log(fruitX);
};
