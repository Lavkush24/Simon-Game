let gameSeq = [];
let userSeq = [];
let btns = ["one","two","three","four"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("Game Started");
        started = true;

     levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },200);
};

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randomColor = btns[Math.floor(Math.random() * 3)];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnFlash(randomBtn);
};

function checkAns(idx) {

    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000);
        }
    }else {
        h2.innerHTML = `Game Over! <b>Your Score:${level}<b> <br> Press any key to RESTART`;
        let body = document.querySelector("body");
        body.style.backgroundColor = "red";
        setTimeout(() => {
            body.style.backgroundColor = "white";
        },100);
        reset();
    }
};

function btnPress() {
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length - 1);
};

let allBtns = document.querySelectorAll(".color");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
};

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
};
