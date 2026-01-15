let direction = { x: 0, y: 0 };
let lastPaintTime = 0;
let speed = 2;
let snakeArr = [{ x: 10, y: 15 }];
let inputDir = { x: 0, y: 0 };
let board = document.querySelector(".board");
let food = {
  x: Math.floor(Math.random() * 18) + 1,
  y: Math.floor(Math.random() * 18) + 1,
};
let score = 0;

function main(ctime) {
  window.requestAnimationFrame(main);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
}

function isCollide(sArr) {
  if (sArr[0].x <= 0 || sArr[0].x > 18 || sArr[0].y <= 0 || sArr[0].y > 18) {
    return true;
  }
  for (let i = 1; i < sArr.length; i++) {
    if (sArr[0].x === sArr[i].x && sArr[0].y === sArr[i].y) {
      return true;
    }
  }
  return false;
}

function gameEngine() {
  // Update Food and Snake

  if (isCollide(snakeArr)) {
    inputDir = { x: 0, y: 0 };
    alert("Game is Over");
    snakeArr = [{ x: 13, y: 15 }];
  }

  if (snakeArr[0].x === food.x && snakeArr[0].y === food.y) {
    food = {
      x: Math.floor(Math.random() * 18) + 1,
      y: Math.floor(Math.random() * 18) + 1,
    };
    snakeArr.unshift({
      x: snakeArr[0].x + inputDir.x,
      y: snakeArr[0].y + inputDir.y,
    });
  }

  for (let i = snakeArr.length - 1; i > 0; i--) {
    snakeArr[i] = { ...snakeArr[i - 1] };
  }

  snakeArr[0].x += inputDir.x;
  snakeArr[0].y += inputDir.y;

  // Display Food and Snake
  board.innerHTML = "";
  snakeArr.forEach((ele, idx) => {
    let snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = ele.x;
    snakeElement.style.gridColumnStart = ele.y;
    snakeElement.style.borderRadius = `4px`;
    snakeElement.classList.add("snake");
    if (idx === 0) {
      snakeElement.classList.add("head");
    }
    board.appendChild(snakeElement);
  });
  let foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.x;
  foodElement.style.gridColumnStart = food.y;
  foodElement.style.borderRadius = `4px`;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

// Main Logic
window.requestAnimationFrame(main);
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      inputDir = { x: -1, y: 0 };
      break;
    case "ArrowDown":
      inputDir = { x: 1, y: 0 };
      break;
    case "ArrowRight":
      inputDir = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      inputDir = { x: 0, y: -1 };
      break;
  }
});
