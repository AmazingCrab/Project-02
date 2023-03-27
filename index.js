/*Variables declaration*/
let computerSelection = ""
let playerSelection = "";

/*Variables declaration*/


/*Computer Choice f(x) Start here*/      /*Computer Choice f(x) Start here*/
function getComputerChoice();   {   
    let randomNumber = Math.round(Math.random()*10); /*This make a randomNumber from 1 to 10*/
    computerSelection = "SCISSOR";
    if  (randomNumber <= 3) {
        computerSelection ="ROCK";
    }   else if (randomNumber <=6)   {
        computerSelection = "PAPER"
    }
    return  computerSelection;
}
/*Computer Choice f(x) Finish here*/      /*Computer Choice f(x) Finish here*/      
