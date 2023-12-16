let gameSeq = [];
let userSeq = [];

let level = 0;
let started = false;

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game started.")
        started = true;
        levelUp();
    }
})

function gameFlashed(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 300);
}

function userFlashed(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 300);
}

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq); 
    gameFlashed(randBtn);
}

function btnPresses(){
    let btn = this;
    userFlashed(btn);
    let userColor = btn.getAttribute("id");
    // console.log(this);
    console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);
    checkPattern();
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click", btnPresses)
}

function checkPattern(){
    let idx = level-1;
    if(userSeq[idx] === gameSeq[idx]){
        console.log("Same Value. Continue playing.")
    }else{
        h2.innerText = `Game Over! at level ${level}. Press any key to start again.`
    }
}




