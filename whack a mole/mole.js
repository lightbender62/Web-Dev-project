let currMoleTile;
let currPiranhaTile;
let score=0;
let gameOver = false;

window.onload = function(){
    setGame();
}

function selectTile(){

    if(gameOver){
        return;
    }

    if(this==currMoleTile){
        score+=1;
        document.getElementById("score").innerText = score.toString();
    }
    else if(this==currPiranhaTile){
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}

function setGame(){
    //set up the grid for the game board
    for(let i=0; i<9; i++){
        let tile = document.createElement("div");
        tile.id=i.toString();
        document.getElementById("board").appendChild(tile);
        tile.addEventListener('click', selectTile);
    }
    setInterval(setMole, 1200);
    setInterval(setPiranha, 1200);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {

    if(gameOver){
        return;
    }

    if(currMoleTile){
        currMoleTile.innerHTML = "";
    }

    let mole= document.createElement("img");
    mole.src="../assests/monty-mole.png";

    let num = getRandomTile();

    if(currPiranhaTile && currPiranhaTile.id== num){
        return;
    }
    currMoleTile=document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function getRandomTile2() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setPiranha() {

    if(gameOver){
        return;
    }

    if(currPiranhaTile){
        currPiranhaTile.innerHTML = "";
    }

    let Piranha= document.createElement("img");
    Piranha.src="../assests/piranha-plant.png";

    let num = getRandomTile2();

    if(currMoleTile && currMoleTile.id==num){
        return;
    }
    currPiranhaTile=document.getElementById(num);
    currPiranhaTile.appendChild(Piranha);
}