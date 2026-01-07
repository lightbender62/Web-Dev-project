const para = document.querySelector("#sentence");
const userinput = document.querySelector("#input");
const startbtn = document.querySelector("#start_btn");
let sents = [];
let text = "";
let timer = null;
let time = 90;
let mist = 0;

/* I have here used an fetch API to generate random sentences for the typing game  */

async function renderNew() {
  sents = [];

  const url = "https://random-word-api.herokuapp.com/word?number=100";
  try {
    const response = await fetch(url);
    const words = await response.json();
    for (let i = 0; i < 3; i++) {
      const sentsWord = words.slice(i * 8, (i + 1) * 8);
      if (sentsWord.length === 0) {
        break;
      }

      sentsWord[0] =
        sentsWord[0].charAt(0).toUpperCase() + sentsWord[0].slice(1);
      let sentence = sentsWord.join(" ") + ".";
      sents.push(sentence);
    }
  } catch (error) {
    console.error(
      `Sentence generation has been Failed... Please refresh the Website`
    );
  }

  text = sents.join(" ");
  const charsarr = text.split("").map((value) => {
    return `<span class="char">${value}</span>`;
  });
  para.innerHTML = charsarr.join("");
}

// Timer Updating functions
function updateTimer() {
  if (time <= 0) {
    displayResult();
  } else {
    time--;
    document.querySelector(".time").innerText = time + " s";
  }
}

// start test function rests timer and counters to zero + setInterval method to update timer
function startTest() {
  mist = 0;
  time = 90;
  userinput.value = "";
  userinput.focus();
  renderNew();
  document.querySelector(".time").innerText = time + "s";
  if (timer) {
    clearInterval(timer);
  }
  timer = setInterval(updateTimer, 1000);
}

// Calculate and Update the result
function displayResult() {
  clearInterval(timer);
  let timeElapsed = 90 - time;
  if (timeElapsed === 0) timeElapsed = 1;
  const mins = timeElapsed / 60;
  const charlen = userinput.value.length;
  const wpm = Math.round(charlen / 5 / mins);
  const rightchar = document.querySelectorAll(".char.success").length;
  let acc = 0;
  if (charlen > 0) {
    acc = (rightchar / charlen) * 100;
  }
  document.querySelector(".awpm").innerText = wpm.toFixed(2) + " wpm";
  document.querySelector(".aacc").innerText = acc.toFixed(2) + "%";
}

// This is to check input field and assign the visual Feedback of typed result
userinput.addEventListener("input", (e) => {
  const allchars = document.querySelectorAll(".char");
  const inputchars = userinput.value.split("");
  mist = 0;
  let j = 0;
  for (let char of allchars) {
    if (inputchars[j] == null) {
      char.classList.remove("success");
      char.classList.remove("fail");
    } else if (inputchars[j] == char.textContent) {
      char.classList.add("success");
      char.classList.remove("fail");
    } else {
      char.classList.add("fail");
      mist++;
    }
    j++;
  }

  document.querySelector(".amist").innerText = mist;
  if (userinput.value.length === text.length) {
    displayResult();
  }
});
startbtn.addEventListener("click", startTest);
window.onload = () => {
  userinput.value = "";
  renderNew();
};
