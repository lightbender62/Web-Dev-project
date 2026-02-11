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

// Remaining :Add Logic for snake Body increase on food eaten
// Remaining :Add Scoreboard and display Stuff
// Remaining :Linking to Home and Display on That

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
  if (isCollide(snakeArr)) {
    inputDir = { x: 0, y: 0 };
    alert(`Game Over. YOUR SCORE: ${score} Press any OK to play again!`);
    snakeArr = [{ x: 10, y: 15 }];
    score = 0;
    speed = 5;
  }

  let newHead = {
    x: snakeArr[0].x + inputDir.x,
    y: snakeArr[0].y + inputDir.y,
  };

  /* 
  Check if we eat food or not using newhead 
  For  the Growing of Snake part first i was trying to get the whole snake move but that was not working so 
  Now just add the new element before the array for eaten is true else add and pop the tail  
  */
  if (newHead.x === food.x && newHead.y === food.y) {
    score += 1;
    document.querySelector(".scoreBox").textContent = `YOUR SCORE:${score}`;
    if (score % 5 === 0) {
      speed += 1;
    }

    let a = 2;
    let b = 16;
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };

    snakeArr.unshift(newHead);
  } else {
    snakeArr.unshift(newHead);
    snakeArr.pop();
  }
  /* RENDERING STUFF TO THE DOM */

  board.innerHTML = "";
  snakeArr.forEach((ele, idx) => {
    let snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = ele.x;
    snakeElement.style.gridColumnStart = ele.y;
    if (idx === 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snakeBody");
    }

    if (inputDir.x === -1) snakeElement.style.transform = "rotate(0deg)";
    if (inputDir.x === 1) snakeElement.style.transform = "rotate(180deg)";
    if (inputDir.y === 1) snakeElement.style.transform = "rotate(90deg)";
    if (inputDir.y === -1) snakeElement.style.transform = "rotate(-90deg)";

    board.appendChild(snakeElement);
  });

  let foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.x;
  foodElement.style.gridColumnStart = food.y;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

/* EVENT LISTENERS AND KIND OF SETINTERVAL */

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

let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

const swipeThreshold = 30;
window.addEventListener("touchstart", (e) => {
  startX = e.changedTouches[0].clientX;
  startY = e.changedTouches[0].clientY;
});

window.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  endY = e.changedTouches[0].clientY;

  handleswipe();
});

function handleswipe() {
  let X = endX - startX;
  let Y = endY - startY;

  if (Math.abs(X) > Math.abs(Y) && Math.abs(X) > swipeThreshold) {
    if (X > 0) {
      inputDir = { x: 0, y: 1 };
    } else {
      inputDir = { x: 0, y: -1 };
    }
  } else if (Math.abs(Y) > swipeThreshold) {
    if (Y > 0) {
      inputDir = { x: 1, y: 0 };
    } else {
      inputDir = { x: -1, y: 0 };
    }
  }
}
