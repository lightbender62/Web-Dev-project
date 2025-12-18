let pipe1_hg;
let hole1_hg;
let pipe2_hg;

const contain = document.querySelector(".container");

setInterval(() => {
  pipe1_hg = Math.floor(Math.random() * 10) + 30;
  hole1_hg = Math.floor(Math.random() * 10) + 20;
  document.querySelector("#pipe1").style.height = pipe1_hg + "%";
  document.querySelector("#pipe2").style.top = pipe1_hg + hole1_hg + "%";
  document.querySelector("#pipe2").style.height =
    100 - (pipe1_hg + hole1_hg) + "%";
}, 4000);

let elem = document.querySelector("#bird");

setInterval(() => {
  let x = parseInt(window.getComputedStyle(elem).getPropertyValue("top"));
  if (x <= 510) {
    elem.style.top = x + 3 + "px";
  } else {
    alert("Your Score is:" + score);
    elem.style.top = 100 + "px";
    window.location.reload();
  }
}, 30);

// tutorial completed till --> 8:23
