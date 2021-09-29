console.log('Connected...');

const canvasBackground = 'transparent';
const canvasBorder = 'greenyellow';
const snakeColor = 'greenyellow';
const snakeBorder = '#252b28';
const powerUpColor = 'red';

let snake = [
  { x: 300, y: 300 },
  { x: 280, y: 300 },
  { x: 260, y: 300 },
  { x: 240, y: 300 },
  { x: 220, y: 300 }
]

let powerUp = [{ x: 120, y: 500 }];

const snakeBoard = document.querySelector('#snakeBoard');
const snakeBoard_ctx = snakeBoard.getContext('2d');

main();

function main() {
  clearCanvas();
  drawSnake();
  drawPowerUp();
}


function clearCanvas() {
  snakeBoard_ctx.fillStyle = canvasBackground;
  snakeBoard_ctx.strokeStyle = canvasBorder;
  snakeBoard_ctx.fillRect(0, 0, snakeBoard.width, snakeBoard.height);
  snakeBoard_ctx.strokeRect(0, 0, snakeBoard.width, snakeBoard.height);
};

function drawPowerUp() {
  powerUp.forEach(drawPowerUpPellet);
};

function drawSnake() {
  snake.forEach(drawSnakePart);
};

function drawPowerUpPellet(powerUp) {
  snakeBoard_ctx.fillStyle = powerUpColor;
  snakeBoard_ctx.fillRect(powerUp.x, powerUp.y, 20, 20);
};

function drawSnakePart(snakePart) {
  snakeBoard_ctx.fillStyle = snakeColor;
  snakeBoard_ctx.strokeStyle = snakeBorder;
  snakeBoard_ctx.fillRect(snakePart.x, snakePart.y, 20, 20);
  snakeBoard_ctx.strokeRect(snakePart.x, snakePart.y, 20, 20);
};