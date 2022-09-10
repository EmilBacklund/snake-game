import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
} from "/snake.js";
//  Almost any game you are going to work on
//  is going to be broken into two different steps

//  You are going to have an "update loop" medthod
//  That are updating all the logic for the game

//  And another loop called "draw" or "render"
//  This is what's going to draw everything on the screen
//  base on the "update loop"

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;

  update();

  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
}
