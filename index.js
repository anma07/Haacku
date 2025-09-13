const nobtn = document.getElementById("nobtn");
const yesbutton6 = document.querySelectorAll(".col-6.d-none");
const yesbutton4 = document.querySelectorAll(".col-4.d-none");
const yesbutton12 = document.querySelectorAll(".col-12.d-none");
const yesbutton3 = document.querySelectorAll(".col-3.d-none");
const foot = document.querySelector(".foot.d-none");
let yescount6=0;
let yescount12=0;
let yescount3=0;
let yescount4=0;
console.log(yesbutton6.length);

nobtn.addEventListener("click", ()=>{
    console.log("Hello, no is working");
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
    if(yesbutton4.length>yescount4){
        yesbutton4[yescount4].classList.remove("d-none");
        yescount4++;
    }
    if(yescount4 === 2 && yescount3 === 2 && yescount12 === 2 && yescount6 === 2){
        foot.classList.remove("d-none");
    }
})