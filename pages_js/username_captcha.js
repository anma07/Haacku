//username javascript

const usernamepage = document.getElementById("usernamepage");
const myCell = document.getElementById("myCell");
const reloaduser = document.getElementById("reloaduser");
const usernamesub = document.getElementById("usernamesub");
const textarr = ['a', 'v', 'n', 'i', '*', '@', '%','&','(','0','1','o','p','e','h','m','l','t','u','g','$'];
// console.log(checkarr);

// console.log(myCell.length);
let textc = "";

if(usernamepage){
    document.addEventListener('keydown',function(event){
        changeKeys_username(event.key);
        if(textc.length>13){
            textc=textc.slice(0,13);
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
        case "1": textc = textc + "1"; break;
        case "`": textc = textc + "e"; break;
        case "2": textc = textc + "v"; break; //1
        case "3": textc = textc + "o"; break; //2
        case "4": textc = textc + "@"; break; //3
        case "5": textc = textc + "0"; break;
        case "6": 
        case "7": textc = textc + "a"; break; //4
        case "8": textc = textc + "haha"; break; 
        case "9": textc = textc + "("; break; //5
        case "0": textc = textc + "&"; break; //6
        case "-": textc = textc + "uuh"; break;
        case "[": textc = textc + "m"; break; //7
        case ",": textc = textc + "0"; break; 
        case "Tab": textc = textc + "p"; break; //8
        case "]": textc = textc + "l"; break; //9
        case "=": textc = textc + "hello"; break;
        case ";": textc = textc + "h"; break; //10
        case ".": textc = textc + "t"; break; //11
        case "/": textc = textc + "llong"; break; 
        case "Control": textc = textc + "$"; break; //12
        case "ArrowUp": textc = textc + "n"; break; //13
        case "ArrowDown": textc = textc + "i"; break; //14
        case "ArrowLeft": textc = textc + "0"; break;
        case "ArrowRight": textc = textc + "1"; break;
        case "Shift": textc = textc + "%"; break; //15
    }
}

const usernamesubmit = document.getElementById("usernamesubmit");

let lettercount = 0;
let numbercount = 0;
let scharcount = 0;
let flag;
let flag27;

function validUsername(textc){
    textc=textc.slice(0,13);
    if(textc==="avani"){
        flag = true;
        flag27 = true;
    }
    else{
        let lettercount = 0;
        let numbercount = 0;
        let scharcount = 0;
        let ecount = 0;
        for(i=0; i<textc.length; i++){
        if(textc[i]==='0'||textc[i]==='1'){
            numbercount++;
        }
        if(textc[i]==='a'||textc[i]==='v'||textc[i]==='n'||textc[i]==='i'||textc[i]==='p'||textc[i]==='o'||textc[i]==='m'||textc[i]==='l'||textc[i]==='h'||textc[i]==='t'){
            lettercount++;
        }
        if(textc[i]==='$'||textc[i]==='@'||textc[i]==='('||textc[i]==='&'||textc[i]==='%'){
            scharcount++;
        }
        if(textc[i]==='e'){
            ecount++;
            // alert("Toothless doesnt like eels, which start from e, so skip it");
            // flag = false;
            // textc = "";
        }
        }
    if(textc.length<13){
        console.log("text legth:",textc.length);
        alert("Username too small");
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
    else if(ecount>0){
        alert("Toothless doesnt like eels, which start from e, so skip it");
        flag = false;
    }
    else {
        if(numbercount===0){
            if(trouble(textc)){
                alert("Don't put same thing more than 1 time now come on");
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
    if(flag){
        if(flag27){
            console.log("proceed");
            alert("cool username");
            window.location.href = "../pages_html/captcha.html";
        }
        else{
            console.log("proceed");
            alert("ugly username, nvm we dont't need one");
            window.location.href = "../pages_html/captcha.html";
        }
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
    for(i=0; i<13; i++){
        let index = textarr.findIndex(element => element===textc[i]);
        checkarr[index]++;
    }
    for(i=0; i<textarr.length; i++){
        if(checkarr[i]>1){
            console.log(checkarr);
            return true;
        }
    }
    console.log(checkarr);
    return false;
}


//captcha javascript

const captchasub = document.getElementById("captchasub");

const captcha = document.getElementById("captcha");
if(captcha){
    // console.log("Captcha id works");
    setInterval(() => alert("."), 5000);
}

let flag2 = false;
let captchastr = "&hv1om0(";

function checkcaptcha(textc){
    if(captchastr===textc){
        console.log("congrats ts working");
        flag2 = true;
    }
    else{
        alert("Its just few characters now comeon");
    }
}

if(captchasub){
    captchasub.addEventListener("click", ()=>{
        checkcaptcha(textc);
        if(flag2){
            window.location.href = "../pages_html/tiktaktos.html";
        }
    });
}