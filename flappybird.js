let pipe1_hg;
let hole1_hg;
let pipe2_hg;
let gameOver = false;

const contain = document.querySelector(".container");

setInterval(() => {
  if (gameOver) return;
  pipe1_hg = Math.floor(Math.random() * 10) + 30;
  hole1_hg = Math.floor(Math.random() * 10) + 20;
  document.querySelector("#pipe1").style.height = pipe1_hg + "%";
  document.querySelector("#pipe2").style.top = pipe1_hg + hole1_hg + "%";
  document.querySelector("#pipe2").style.height =
    100 - (pipe1_hg + hole1_hg) + "%";
}, 2500);

let elem = document.querySelector("#bird");

setInterval(() => {
  if (gameOver) return;
  let x = parseInt(window.getComputedStyle(elem).getPropertyValue("top"));
  if (x <= 510) {
    elem.style.top = x + 4 + "px";
  }
   else {
    endgame();
  }
}, 30);

function jump(){
  if (gameOver) return
  var fly = parseInt(window.getComputedStyle(elem).getPropertyValue("top"));
  if(fly>=14){
    elem.style.top = (fly-40) + "px";
  }
}

document.addEventListener("click" , () => {
  jump();
})

var score = 0;
setInterval(()=> {
  if (gameOver) return;
  score++;
  document.getElementById("src").innerHTML = score;
} , 2500);

function collision(elem1 , elem2){
  if (gameOver) return;
  var elem1rect = elem1.getBoundingClientRect();
  var elem2rect = elem2.getBoundingClientRect();

  return(elem1rect.right >= elem2rect.left && elem1rect.left <= elem2rect.right && elem1rect.bottom >= elem2rect.top && elem2rect.bottom >= elem1rect.top);
}

setInterval(() => {
  if (gameOver) return;
  if(collision(document.getElementById("birdHitbox"), document.getElementById("pipe1")) ||collision(document.getElementById("birdHitbox"), document.getElementById("pipe2"))){
    endgame();
  }
}, 10);

function endgame(){
  if(gameOver) return;
  gameOver = true;

  document.getElementById("pipe1").style.animationPlayState = "paused";
  document.getElementById("pipe2").style.animationPlayState = "paused";
  const overlay = document.createElement("div");
  overlay.style.position = "absolute";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0,0,0,0.7)";
  overlay.style.display = "flex";
  overlay.style.flexDirection = "column";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.color = "#fff";
  overlay.style.fontSize = "24px";
  overlay.style.zIndex = "79";
  overlay.style.gap = "9px";

  overlay.innerHTML = `
    <h2>Game Over</h2>
    <p>Your Score: ${score}</p>
    <button id="restartBtn">Restart</button>
  `;

  const game = document.getElementById("game")
  game.appendChild(overlay);

  document.getElementById("restartBtn").onclick = () => {
    window.location.reload();
  };
}
