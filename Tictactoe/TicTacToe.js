
let boxes = document.querySelectorAll(".buttons");
let newGame = document.querySelector(".NEW_GAME");

let turn = "X";
let gameOver = false;


for (let i = 0; i < boxes.length; i++) {

    boxes[i].onclick = function () {


        if (boxes[i].innerText != "" || gameOver == true) {
            return;
        }

        boxes[i].innerText = turn;

        checkWinner();


        if (turn == "X") {
            turn = "O";
        } else {
            turn = "X";
        }
    };
}


function checkWinner() {


    if (same(0, 1, 2) || same(3, 4, 5) || same(6, 7, 8) || same(0, 3, 6) || same(1, 4, 7) || same(2, 5, 8) || same(0, 4, 8) || same(2, 4, 6)) {
        win();
        return;
    }




    let filled = true;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].innerText == "") {
            filled = false;
        }
    }

    if (filled == true) {
        gameOver = true;
        alert("Draw!");
    }
}


function same(a, b, c) {

    if (boxes[a].innerText == "") {
        return false;
    }

    if (boxes[a].innerText == boxes[b].innerText &&
        boxes[b].innerText == boxes[c].innerText) {
        return true;
    }

    return false;
}


function win() {
    gameOver = true;
    alert(`${turn} wins!`);
}


newGame.onclick = function () {

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = "";
    }

    turn = "X";
    gameOver = false;
};