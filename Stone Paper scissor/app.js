let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const getcompchoice =() =>{
    const options =["rock","paper","scissors"];
    const ranIdx =Math.floor(Math.random() * 3);
    return options[ranIdx];
}

const drawgame = (userchoice, compchoice) => {
    msg.innerText =`Match was draw,Your ${userchoice} is equal to computers ${compchoice} .Play again `;
    msg.style.backgroundColor="blue";
}

const userscorecount= document.querySelector("#user-score");
const compscorecount= document.querySelector("#comp-score");

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore ++;
        userscorecount.innerText =userscore;
        msg.innerText =`U win! Your ${userchoice} beats ${compchoice}` ;
        msg.style.backgroundColor="purple";
    }
    else{
        msg.innerText =`Comp win! Your ${userchoice} was beaten by ${compchoice}`;
        msg.style.backgroundColor="green";
        compscore ++;
        compscorecount.innerText =compscore;
    }
}
const playGame = (userchoice) => {
    // alert(`User choice is ${userchoice}`);
    const compchoice =getcompchoice();

    if (userchoice == compchoice) {
        drawgame(userchoice,compchoice);
    }
    else{
        let userwin =true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        }
        else{
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};
    choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
    });
    });