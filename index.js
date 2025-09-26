//most of the console logs are added to test stuff, and i dont want to take them out, cuz so much green green in between the code looks so cool in vs code

//win_vs_fed js
//to give out yes buttons in random-like ugly way

const nobtn = document.getElementById("nobtn");
const yesbutton6 = document.querySelectorAll(".col-6.d-none");
const yesbutton1 = document.querySelectorAll(".col-1.d-none");
const yesbutton12 = document.querySelectorAll(".col-12.d-none");
const yesbutton3 = document.querySelectorAll(".col-3.d-none");
const foot = document.querySelector(".foot.d-none");
let yescount6=0;
let yescount12=0;
let yescount3=0;
let yescount1=0;


const sleep = (delayInMilliseconds) => {
  return new Promise(resolve => setTimeout(resolve, delayInMilliseconds));
};
async function delay1(){
    await sleep(1000);
}

// console.log(yesbutton6.length);

if(nobtn){
    nobtn.addEventListener("click", ()=>{
    // console.log("Hello, no is working");
    if(yesbutton6.length>yescount6){
        yesbutton6[yescount6].classList.remove("d-none");
        yescount6++;
    }
    if(yesbutton12.length>yescount12){
        yesbutton12[yescount12].classList.remove("d-none");
        yescount12++;
    }
    if(yesbutton3.length>yescount3){
        yesbutton3[yescount3].classList.remove("d-none");
        yescount3++;
    }
    if(yesbutton1.length>yescount1){
        yesbutton1[yescount1].classList.remove("d-none");
        yescount1++;
    }
    if(yescount1 === 3 && yescount3 === 3 && yescount12 === 3 && yescount6 === 3){
        // console.log("We done");
        foot.classList.remove("d-none");
    }
})
}

//this will take you back to wf html with special message
const bait1 = document.getElementById("bait1");
const rb1 = document.querySelector(".col-11.d-none");
console.log(rb1);

if(bait1){
    bait1.addEventListener("click", ()=>{
    localStorage.setItem("flag", "1");
    window.location.href="win_vs_fed.html";
})
}

if(rb1){
    console.log(rb1.length);
    if (localStorage.getItem("flag") === "1") {
    rb1.classList.remove("d-none");
}
}

//username javascript

const usernamepage = document.getElementById("usernamepage");
const myCell = document.getElementById("myCell");
const reloaduser = document.getElementById("reloaduser");
const usernamesub = document.getElementById("usernamesub");

if(usernamesub){
    usernamesub.addEventListener("click", ()=>{
        validUsername(textc);
        if(flag){

        }
        else{
            textc = "";
        }
    })
}

// console.log(myCell.length);
let textc = "";

if(usernamepage){
    document.addEventListener('keydown',function(event){
        changeKeys_username(event.key);
        if(textc.length>16){
            textc=textc.slice(0,16);
        }
        console.log(textc);
        myCell.textContent = textc;
    });
}

if(reloaduser){
    reloaduser.addEventListener("click", ()=>{
        location.reload();
        alert("Enter your username again😊");
    })
}

function changeKeys_username(key){
    switch (key) {
        case "y":
        case "w":
        case "u":
        case "s":
        case "q":
        case "o":
        case "m":
        case "k":
        case "i":
        case "g":
        case "e":
        case "c":
        case "a":
            textc = textc + "1";
            break;
        
        case "z":
        case "x":
        case "v":
        case "t":
        case "r":
        case "p":    
        case "n":    
        case "l":
        case "j":    
        case "h":
        case "f":    
        case "d":    
        case "b":
        case "Delete":
            textc = textc + "0";
            break;

        case "Enter":
        case "Backspace":
            textc = "";
            break;
        case "7": textc = textc + "a"; break;
        case "2": textc = textc + "v"; break;
        case "ArrowUp": textc = textc + "n"; break;
        case "ArrowDown": textc = textc + "i"; break;
    }
}

const usernamesubmit = document.getElementById("usernamesubmit");

let lettercount = 0;
let numbercount = 0;
let scharcount = 0;
let flag;

function validUsername(textc){
    if(usernamesubmit){
        for(i=0; i<16; i++){
        if(textc[i]==='0'||textc[i]==='1'){
            numbercount++;
        }
        if(textc[i]==='a'||textc[i]==='v'||textc[i]==='n'||textc[i]==='i'){
            lettercount++;
        }
    }

    if(lettercount===0){
        alert("Add letters to your username");
        flag = false;
    }
    else if(scharcount===0){
        alert("Add special characters to your username");
        flag = false;
    }
    else{
        if(scharcount===0){
            flag = true;
        }
        else{
            alert("No nos.");
            flag = false;
        }
    }
    }
}

//captcha page

const captcha = document.getElementById("captcha");
if(captcha){
    // console.log("Captcha id works");
    setInterval(() => alert("."), 5000);
    setInterval(() => confetti(), 5000);
}