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

//start the legendary TIKTAKTOS

const tttstart = document.getElementById("tttstart");
const bodyttt = document.querySelector(".bodyttt");
const tttback = document.querySelector(".tttlight.d-none");

// console.log(bodyttt.length);

if(tttstart){
    tttstart.addEventListener("click", ()=>{
    // console.log("tttstart was pressed");
    bodyttt.classList.add("black");
    tttback.classList.remove("d-none");
})
}
//TIKTAKTOS code
const square = document.querySelectorAll(".square");
// console.log(cell.length);