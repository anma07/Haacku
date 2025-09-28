//username javascript

const usernamepage = document.getElementById("usernamepage");
const myCell = document.getElementById("myCell");
const reloaduser = document.getElementById("reloaduser");
const usernamesub = document.getElementById("usernamesub");
const textarr = ['a', 'v', 'n', 'i', '*', '@', '%','&','(','0','1','o','p'];
// console.log(checkarr);

// if(usernamesub){
//     usernamesub.addEventListener("click", ()=>{
//         validUsername(textc);
//         if(flag){

//         }
//         else{
//             textc = "";
//         }
//     })
// }

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

        case "/":
            textc = textc + "*";
            break;

        case "Enter":
        case "Backspace":
            textc = "";
            break;
        case "1": textc = textc + "p"; break;
        case "2": textc = textc + "v"; break;
        case "3": textc = textc + "o"; break;
        case "4": textc = textc + "@"; break;
        case "5": textc = textc + "0"; break;
        case "6": 
        case "7": textc = textc + "a"; break;
        case "8": textc = textc + "%"; break;
        case "9": textc = textc + "("; break;
        case "0": textc = textc + "&"; break;
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
    textc=textc.slice(0,16);
    if(textc==="avani"){
        flag = true;
    }
    else{
        let lettercount = 0;
        let numbercount = 0;
        let scharcount = 0;
        for(i=0; i<textc.length; i++){
        if(textc[i]==='0'||textc[i]==='1'){
            numbercount++;
        }
        if(textc[i]==='a'||textc[i]==='v'||textc[i]==='n'||textc[i]==='i'||textc[i]==='p'||textc[i]==='o'){
            lettercount++;
        }
        if(textc[i]==='*'||textc[i]==='@'||textc[i]==='('||textc[i]==='&'||textc[i]==='%'){
            scharcount++;
        }
        }
    if(textc.length<16){
        console.log("text legth:",textc.length);
        alert("To small");
        flag=false;
    }
    else if(lettercount===0){
        alert("Add letters to your username");
        flag = false;
    }
    else if(scharcount===0){
        alert("Add special characters to your username");
        flag = false;
    }
    else {
        if(numbercount===0){
            if(trouble(textc)){
                alert("Don't put same thing more than 3 times now come on");
            }
            else{
                flag = true;
            }
        }
        else{
            alert("No nos.");
            flag = false;
            console.log(numbercount);
        }
    }
}
    if(flag===true){
        console.log("proceed");
        window.location.href = "../pages_html/captcha.html";
    }
    else{
        console.log("no proceed");
    }
}

if(usernamesub){
    usernamesub.addEventListener("click", ()=>{
        console.log("main submit was pressed");
        validUsername(textc);
    })
}

function trouble(textc){
    const checkarr = new Array(textarr.length).fill(0);
    console.log("trouble was called");
    for(i=0; i<16; i++){
        let index = textarr.findIndex(element => element===textc[i]);
        checkarr[index]++;
    }
    for(i=0; i<textarr.length; i++){
        if(checkarr[i]>3){
            console.log(checkarr);
            return true;
        }
    }
    console.log(checkarr);
    return false;
}


//captcha page

const captchasub = document.getElementById("captchasub");

const captcha = document.getElementById("captcha");
if(captcha){
    // console.log("Captcha id works");
    setInterval(() => alert("."), 5000);
}

let flag2 = false;
let captchastr = "a%&pov";

function checkcaptcha(textc){
    if(captchastr===textc){
        console.log("congrats ts working");
        flag2 = true;
    }
    else{

    }
}

if(captchasub){
    captchasub.addEventListener("click", ()=>{
        checkcaptcha(textc);
    });
}