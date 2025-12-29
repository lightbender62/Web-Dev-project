

let tiles=document.querySelectorAll(".gamearea");
let keyBoard=document.querySelectorAll(".key");
let main=document.getElementById('playArea');

const newDiv = document.createElement('div');
newDiv.className = "winner";
newDiv.textContent='Congratulations!!!';

const newDiv2 = document.createElement('div');
newDiv2.className = "winner";
newDiv2.textContent='You are almost there';

let word="MAGIC";

let i=0;
let keyletter='enter';
let keyword='';    

for(let x=0; x<28; x++){
    keyBoard[x].addEventListener('click', () => {

        if(keyBoard[x].textContent==='remove' ){
            if(i%5===0 && keyword==="enter"){
            }
            else if(i%5===0 && keyword===""){
                i--;   
                tiles[i].textContent="";
                keyword="";
            }
            else if(i%5!==0){    
                    i--;   
                tiles[i].textContent="";
                keyword="enter";
                
            }
            keyletter='enter';
        }

        else if(keyBoard[x].textContent==='enter'){
            keyword='enter';
            keyletter='enter';
        }    

        else if(keyletter==='enter'){
            tiles[i].textContent=keyBoard[x].textContent;
            keyword='';
         i++;
        }

        
        if(i%5===0 && i!==0 && keyword!=='enter'){
            keyletter='';
        }
        
        if(i%5===0 && keyword==='enter'){
            let count=0;
            for(let a=i-5; a<i; a++){
                if(word[a+5-i]===tiles[a].textContent){
                    tiles[a].classList.add("correct");
                    count++;
                }
                else{
                    let appear=0;
                    for(let m=0; m<5; m++){
                        if(word[m]===tiles[a].textContent){
                            appear++;
                            break;
                        }
                    }
                    if(appear==0){
                        tiles[a].classList.add("incorrect");
                    }
                     else if(appear==1){
                        tiles[a].classList.add("partial");
                    }

                    }

                }
                if(count==5){
                    console.log("Eureka!!!");
                    main.appendChild(newDiv);
                    newDiv2.remove();

                    i=50;
                }
                else if(count==4){
                    main.appendChild(newDiv2);
                }
            }

        });
}