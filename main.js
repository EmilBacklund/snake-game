import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
  getSnakeHead,
  snakeIntersection,
} from "/snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";
//  Almost any game you are going to work on
//  is going to be broken into two different steps

//  You are going to have an "update loop" medthod
//  That are updating all the logic for the game

//  And another loop called "draw" or "render"
//  This is what's going to draw everything on the screen
//  base on the "update loop"

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  if (gameOver) {
    return alert("You lose");
  }
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
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
