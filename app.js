let gameseq = [];
let userseq = [];
let btns = ["red" , "yellow", "green" , "purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("game started");
        started = true;
    }

    levelUp();
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    } , 250);
}

function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randCol = btns[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);
    gameseq.push(randCol);
    console.log(gameseq);
    btnFlash(randBtn);
}

function checkUp(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp , 1000);
        }
    }else{
        h2.innerHTML = `Game over! Your score is <b>${level}</b> <br/> please enter any key to start`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white";
        } , 150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    userCol = btn.getAttribute("id");
    userseq.push(userCol);

    checkUp(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click" , btnPress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}