let canvas;
let ctx;

let player;
let playerX;
let playerY;

let fruit;
let fruitX;
let fruitY;

 // character's movement
 let leftArrowPressed = false;
 let rightArrowPressed = false;
 let downArrowPressed = false;
 let upArrowPressed = false;

//initialize game
window.onload = function () {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    //60 frames per second refresh
    setInterval(loop, 1000 / 60);
};


let drawCanvas = () => {
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
};

let drawPlayer = () => {
    ctx.fillStyle = 'black';
    playerX = canvas.clientWidth / 2;
    playerY = canvas.height / 2;
    ctx.fillRect(playerX, playerY, 100, 100);
};

let drawFruit = () => {
    fruitX = 50;
    fruitY = 50;
    ctx.fillStyle = 'yellow';
    ctx.fillRect(fruitX, fruitY, 10, 10);
};

function moveFruit () {

};

function control() {
   
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(e) {
        if (e.keyCode == 39) {
            rightArrowPressed = true;
            console.log(rightArrowPressed);
        } else if (e.keyCode == 37) {
            leftArrowPressed = true;
            console.log(leftArrowPressed);
        } else if (e.keyCode == 38) {
            upArrowPressed = true;
            console.log(upArrowPressed);
        } else if (e.keyCode == 40) {
            downArrowPressed = true;
            console.log(downArrowPressed);
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

//game loop
let loop = () => {
    drawCanvas();
    drawPlayer();
    drawFruit();
    control();
};