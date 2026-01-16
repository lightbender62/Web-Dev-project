let tiles=document.querySelectorAll(".gamearea");
let keyBoard=document.querySelectorAll(".key");
let main=document.getElementById('playArea');
let newGame=document.getElementsByClassName('newGame');

function resetGame(){
    location.reload();
}
newGame[0].addEventListener('click', () => {
resetGame();
});

let word;
let value = prompt("Enter the number between 1 and 100 to set difficulty");
switch(value){
    case "1": word="APPLE"; break;
    case "2": word="HOUSE"; break;
    case "3": word="WATER"; break;
    case "4": word="CHAIR"; break;
    case "5": word="TABLE"; break;
    case "6": word="BREAD"; break;
    case "7": word="PLANT"; break;
    case "8": word="SMILE"; break;
    case "9": word="CLOCK"; break;
    case "10": word="STONE"; break;
    case "11": word="LIGHT"; break;
    case "12": word="GREEN"; break;
    case "13": word="BLACK"; break;
    case "14": word="WHITE"; break;
    case "15": word="SWEET"; break;
    case "16": word="HAPPY"; break;
    case "17": word="MONEY"; break;
    case "18": word="MUSIC"; break;
    case "19": word="RIVER"; break;
    case "20": word="BEACH"; break;
    case "21": word="DRINK"; break;
    case "22": word="PAPER"; break;
    case "23": word="BRUSH"; break;
    case "24": word="CLOUD"; break;
    case "25": word="SOUND"; break;
    case "26": word="HORSE"; break;
    case "27": word="HEART"; break;
    case "28": word="BRAIN"; break;
    case "29": word="SHIRT"; break;
    case "30": word="PHONE"; break;
    case "31": word="GLASS"; break;
    case "32": word="SHARP"; break;
    case "33": word="QUIET"; break;
    case "34": word="QUICK"; break;
    case "35": word="LAUGH"; break;
    case "36": word="CLEAN"; break;
    case "37": word="WRITE"; break;
    case "38": word="DANCE"; break;
    case "39": word="TRUST"; break;
    case "40": word="DREAM"; break;
    case "41": word="BRAVE"; break;
    case "42": word="CRAFT"; break;
    case "43": word="BLEND"; break;
    case "44": word="FLASH"; break;
    case "45": word="STEAM"; break;
    case "46": word="SHAPE"; break;
    case "47": word="TRAIL"; break;
    case "48": word="FLAME"; break;
    case "49": word="SHOCK"; break;
    case "50": word="SWIFT"; break;
    case "51": word="PROUD"; break;
    case "52": word="FAINT"; break;
    case "53": word="CREEP"; break;
    case "54": word="GLARE"; break;
    case "55": word="BLOOM"; break;
    case "56": word="CRACK"; break;
    case "57": word="TWIST"; break;
    case "58": word="DRIFT"; break;
    case "59": word="GRANT"; break;
    case "60": word="SCOUT"; break;
    case "61": word="WITTY"; break;
    case "62": word="VIVID"; break;
    case "63": word="DENSE"; break;
    case "64": word="AGILE"; break;
    case "65": word="SPITE"; break;
    case "66": word="NOVEL"; break;
    case "67": word="CHOKE"; break;
    case "68": word="FROST"; break;
    case "69": word="GLOOM"; break;
    case "70": word="SURGE"; break;
    case "71": word="STALE"; break;
    case "72": word="RIVAL"; break;
    case "73": word="BLEND"; break;
    case "74": word="WHIRL"; break;
    case "75": word="DREAD"; break;
    case "76": word="LATCH"; break;
    case "77": word="KNEEL"; break;
    case "78": word="SMIRK"; break;
    case "79": word="PLUCK"; break;
    case "80": word="QUIRK"; break;
    case "81": word="ABYSS"; break;
    case "82": word="CRYPT"; break;
    case "83": word="GLYPH"; break;
    case "84": word="HAVOC"; break;
    case "85": word="ICHOR"; break;
    case "86": word="LURID"; break;
    case "87": word="OMENY"; break;
    case "88": word="SCION"; break;
    case "89": word="THRUM"; break;
    case "90": word="VIGOR"; break;
    case "91": word="WRATH"; break;
    case "92": word="XERIC"; break;
    case "93": word="NYMPH"; break;
    case "94": word="ZESTY"; break;
    case "95": word="AXIOM"; break;
    case "96": word="BERYL"; break;
    case "97": word="COVET"; break;
    case "98": word="ETHOS"; break;
    case "99": word="FERAL"; break;
    case "100": word="GNASH"; break; 
    default: word="MAGIC";
}

const newDiv = document.createElement('div');
newDiv.className = "winner";
newDiv.textContent='Congratulations!!!';

const newDiv2 = document.createElement('div');
newDiv2.className = "winner";
newDiv2.textContent='You are almost there';

const newDiv3 = document.createElement('div');
newDiv3.className = "winner";
newDiv3.textContent=`Hang in There! Word was ${word}`;

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
                else if(count!=5 && i>=30){
                    main.appendChild(newDiv3);
                    newDiv2.remove();
                }
                else if(count==4){
                    main.appendChild(newDiv2);
                }
                
            }

        });
}