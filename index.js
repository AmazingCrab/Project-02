/*Variables here*/
let computerSelection = ""

/*Variables here*/

function getComputerChoice();   {   /*Computer Selection f(x) Start here*/
    let randomNumber = Math.round(Math.random()*10);
    computerSelection = "SCISSOR";
    if  (randomNumber <= 3) {
        computerSelection ="ROCK";
    }   else if (randomNumber <=6)   {
        computerSelection = "PAPER"
    }
    return  computerSelection;
}                                   /*Computer Selection f(x) Finish here*/

