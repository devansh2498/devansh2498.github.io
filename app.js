//Selector
let userScore=0;
let computerScore=0;
const userScore_span= document.getElementById("user-score");
const computerScore_span= document.getElementById("computer-score");
const scoreboard_div=document.querySelector(".score-board");
const result_p=document.querySelector("p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");


//for modal
    const modal=document.querySelector(".modal-parent");
    const section=document.querySelector("section");
    const X=document.querySelector(".X");
    const greet=document.querySelector(".greet");
    const button=document.querySelector(".button");

//Adding Event Listeners
function getComputerChoice(){
    const choices =["r","p","s"];
    const choiceNumber=Math.floor(Math.random()*3)
    return choices[choiceNumber];
}

function convertToWord(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    if(letter==="s") return "Scissors";
}

function refresh(){
    userScore=0;
    computerScore=0;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML="[The game result goes here]";
}

X.addEventListener("click",()=>{
    modal.style.display="none";
    section.style.filter="blur(0px)";
    refresh();
})

button.addEventListener("click",()=>{
    modal.style.display="none";
    section.style.filter="blur(0px)";
    refresh();
})

function roundWon(){
    greet.innerHTML=`Congrats!! You won the game :)`;
    modal.style.display="block";
    section.style.filter="blur(5px)";
}
function roundLost(){
    greet.innerHTML=`Better luck next time... :(`;
    modal.style.display="block";
    section.style.filter="blur(5px)";
}

function roundResult(userScore,computerScore){
    
    if(computerScore==10){
        setTimeout(()=>roundLost(),300);
    }

    if(userScore==10){
        setTimeout(()=>roundWon(),300);
    }
}


function win(userChoice,computerChoice){
    const userChoice_div=document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`You choose ${convertToWord(userChoice)} and Computer chooses ${convertToWord(computerChoice)}. YOU WIN!`
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"),300)
    roundResult(userScore,computerScore);
}

function lose(userChoice,computerChoice){
    const userChoice_div=document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`You choose ${convertToWord(userChoice)} and Computer chooses ${convertToWord(computerChoice)}. YOU LOST... `
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"),300)
    roundResult(userScore,computerScore);

}

function draw(userChoice,computerChoice){
    const userChoice_div=document.getElementById(userChoice);
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`You choose ${convertToWord(userChoice)} also Computer chooses ${convertToWord(computerChoice)}. IT'S A DRAW.`
    userChoice_div.classList.add("gray-glow");
    setTimeout(() => userChoice_div.classList.remove("gray-glow"),300)
}




function game(userChoice){
    const computerChoice =getComputerChoice();
    switch(userChoice+computerChoice){
        case "rs":
        case "sp":
        case "pr":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener("click",()=>game("r"))
    paper_div.addEventListener("click",()=>game("p"))
    scissor_div.addEventListener("click",()=>game("s"))
}


main();