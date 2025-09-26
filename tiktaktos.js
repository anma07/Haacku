//start the legendary TIKTAKTOS

//TIKTAKTOS code

const square = document.querySelectorAll(".square");
// console.log(square.length);
const status = document.getElementById("status");
const toothlesswins = document.getElementById("toothlesswins");
const playagain = document.getElementById("playagain");

let state = ["", "", "", "", "", "", "", "", ""];
let random = ["0","1", "2", "3", "4", "5", "6", "7", "8"];
let first3 = ["", "", "", ""];
let ttton = true;
let user = "X";
let toothless = "O";
let countttt = 0;
const patterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
let indexcolor = "";
let count = localStorage.getItem("count");
count = count ? parseInt(count, 10) : 0;
// console.log(square.length); i wrote sqaure somewhere and was trying to figure out what was wrong for half hr, this saved me

function click(e){
    let index = e.target.dataset.index;
    handleMove(index)
}
function handleMove(index){
    if(state[index]==="" && ttton){
        state[index] = user;
        console.log(index);
        document.querySelector(`[data-index="${index}"]`).textContent = "X";
        const p = random.indexOf(index);
        random.splice(p,1);
        console.log("random: ",random);
        coloursquare().then(()=>{
            console.log("checkwin done");
        });
        delay1().then(()=>{
            toothlessplay();
            coloursquare().then(()=>{
                console.log("checkwin done");
            });
        });
        // coloursquare().then(()=>{
        //     console.log("checkwin done");
        // });
    }
    else{

    }
    console.log("count: ",count);
}
if(playagain){
playagain.addEventListener("click", ()=>{
    location.reload();
});
}

//this is so my toothless can play XD
function toothlessplay(){
    let tindex = Math.floor(Math.random() *random.length);
    let q = random[tindex];
    state[q] = "O";
    console.log(q);
    square[q].textContent = toothless;
    const p = random.indexOf(q);
    random.splice(p,1);
    console.log(random);
    first3[countttt]=q;
    countttt++;
    console.log(first3);
    console.log(toothlesswin);
}

const sleep = (delayInMilliseconds) => {
  return new Promise(resolve => setTimeout(resolve, delayInMilliseconds));
};
async function delay1(){
    await sleep(1000);
}

//the names are getting confusing and mixing up, but its fine -_<
if(square){
    square.forEach(square => square.addEventListener("click", click));
    // setInterval(() => alert("."), 5000);
}

//my efficient code was not working >_<
function checkpatternpresence(player, board){
    if (board[0] === player && board[1] === player && board[2] === player){
        indexcolor=0;
        return true;
    }
    if (board[3] === player && board[4] === player && board[5] === player){
        indexcolor=1;
        return true;
    }
    if (board[6] === player && board[7] === player && board[8] === player){
        indexcolor=2;
        return true;
    }
    if (board[0] === player && board[3] === player && board[6] === player){
        indexcolor=3;
        return true;
    }
    if (board[1] === player && board[4] === player && board[7] === player){
        indexcolor=4;
        return true;
    }
    if (board[2] === player && board[5] === player && board[8] === player){
        indexcolor=5;
        return true;
    }
    if (board[0] === player && board[4] === player && board[8] === player){
        indexcolor=6;
        return true;
    }
    if (board[2] === player && board[4] === player && board[6] === player){
        indexcolor=7;
        return true;
    }
    if (state.length === 0) return true;
    return false;
}

let toothlesswin = checkpatternpresence(toothless, state);
console.log(toothlesswin);

//Toothless alwayss wins
async function coloursquare(){
    // Toothless wins even if user completes
    if(checkpatternpresence("X", state)){
        console.log("Technically X won");
        for(i=0;i<3;i++){
            squareindex=first3[i];
            const sqaure = document.getElementById("square"+squareindex);
            await delay1();
            sqaure.classList.add("pink");
        }
        toothlesswins.classList.remove("d-none");
        confetti();
        ttton = false;
        count++;
        localStorage.setItem("count", count);
    }
    //Toothless wins when he wins
    else if(checkpatternpresence("O", state)){
        console.log("Toothless won");
        console.log(indexcolor);
        for(p=0;p<3;p++){
            squareindex=(patterns[indexcolor])[p];
            const sqaure = document.getElementById("square"+squareindex);
            await delay1();
            sqaure.classList.add("pink");
        }
        toothlesswins.classList.remove("d-none");
        confetti();
        ttton = false;
        count++;
        localStorage.setItem("count", count);
    }
    //Toothless wins after tie
    else if(random.length===0){
        console.log("Tie happened");
        for(i=0;i<3;i++){
            squareindex=first3[i+1];
            const sqaure = document.getElementById("square"+squareindex);
            await delay1();
            sqaure.classList.add("pink");
        }
        toothlesswins.classList.remove("d-none");
        confetti();
        ttton = false;
        count++;
        localStorage.setItem("count", count);
    }
}

function confetti(){
    confetti({
        particleCount : 200,
        spread : 150,
        origin: { y: 0.6 }
    });
}

window.addEventListener("load", (event) => {
  new cursoreffects.emojiCursor({ emoji: ["🔥", "💩"] });
});