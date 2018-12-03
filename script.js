let canvas;
let ctx;

let player;
let playerX;
let playerY;

let fruit;
let fruitX;
let fruitY;


//initialize game
window.onload = function () {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    //60 frames per second refresh
    setInterval(loop, 1000 / 60)
};

//game loop
let loop = () => {
    drawCanvas();
    drawPlayer();
    drawFruit();
    controls();
}

let drawCanvas = () => {
    ctx.fillStyle = 'grey'
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
}

let drawPlayer = () => {
    ctx.fillStyle = 'black';
    playerX = canvas.clientWidth / 2;
    playerY = canvas.height / 2;
    ctx.fillRect(playerX, playerY, 100, 100);
}

let drawFruit = () => {
    fruitX = 50;
    fruitY = 50;
    ctx.fillStyle = 'yellow';
    ctx.fillRect(fruitX, fruitY, 10, 10);
}

// character movement
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyUp', keyUpHandler, false);
let leftArrowPressed = false;
let upArrowPressed = false;
let rightArrowPressed = false;
let downArrowPressed = false;

function keyDownHandler(event) {
    if(event.keyCode == 39) {
        rightArrowPressed = true;
    }
    else if(event.keyCode == 37) {
        leftArrowPressed = true;
    }
    if(event.keyCode == 40) {
    	downArrowPressed = true;
    }
    else if(event.keyCode == 38) {
    	upArrowPressed = true;
    }
}
