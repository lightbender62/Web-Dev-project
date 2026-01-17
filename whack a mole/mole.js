let currMoleTile;
let currPiranhaTile;
let score=0;
let gameOver = false;
let tile=document.querySelectorAll('.tile');

let btn=document.querySelector('.start');
let wrapper=document.querySelector('.wrapper');


btn.addEventListener('click', ()=>{
    if(btn.textContent==='Start Game'){
             setGame();
    btn.style.display='none';
    wrapper.style.display='block';
    }
    else{
        location.reload();
    }
});


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
        btn.style.display='inline';
        btn.textContent='New game';
    }
}

function setGame(){
    //set up the grid for the game board
    for(let i=0; i<9; i++){        
        tile[i].addEventListener('click', selectTile);
    }
    setInterval(setMole, 1500);
    setInterval(setPiranha, 1500);
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