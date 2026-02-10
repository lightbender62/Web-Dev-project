const v1 = document.querySelector("#v1");
const v2 = document.querySelector("#v2");
const v3 = document.querySelector("#v3");
const v4 = document.querySelector("#v4");
const v5 = document.querySelector("#v5");
const v6 = document.querySelector("#v6");

v1.pause();
v2.pause();
v3.pause();
v4.pause();
v5.pause();
v6.pause();

const boxes = document.querySelectorAll(".box");

boxes[0].addEventListener("mouseenter", () => {
  v1.currentTime = 0;
  v1.play();
});

boxes[0].addEventListener("mouseleave", () => {
  v1.pause();
});
boxes[1].addEventListener("mouseenter", () => {
  v2.currentTime = 0;
  v2.play();
});

boxes[1].addEventListener("mouseleave", () => {
  v2.pause();
});
boxes[2].addEventListener("mouseenter", () => {
  v3.currentTime = 0;
  v3.play();
});

boxes[2].addEventListener("mouseleave", () => {
  v3.pause();
});
boxes[3].addEventListener("mouseenter", () => {
  v4.currentTime = 0;
  v4.play();
});

boxes[3].addEventListener("mouseleave", () => {
  v4.pause();
});
boxes[4].addEventListener("mouseenter", () => {
  v5.currentTime = 0;
  v5.play();
});

boxes[4].addEventListener("mouseleave", () => {
  v5.pause();
});
boxes[5].addEventListener("mouseenter", () => {
  v6.currentTime = 0;
  v6.play();
});

boxes[5].addEventListener("mouseleave", () => {
  v6.pause();
});
