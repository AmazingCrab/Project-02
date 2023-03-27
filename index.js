/*Variables declaration*/
let computerSelection = ""; /*This var store the computer selection*/
let playerSelection = ""; /*This var store the player selection input*/
let gameWinner = ""; /*This var display the match result text*/
let i = 0; /*This variable initialize the loop counter*/
let winnedMatches = "5"; /*This count winnedMatches matches trough loses */
/*Variables declaration*/

/*Computer Choice f(x) & Start here*/ /*Computer Choice f(x) & Start here*/
function getComputerChoice() {
  let randomNumber = Math.round(
    Math.random() * 10
  ); /*This make a randomNumber from 1 to 10*/
  computerSelection = "SCISSOR";
  if (randomNumber <= 3) {
    computerSelection = "ROCK";
  } else if (randomNumber <= 6) {
    computerSelection = "PAPER";
  }
  return computerSelection;
} /*Computer Choice f(x) & Finish here*/ /*Computer Choice f(x) & Finish here*/

/*Player Selection f(x) & Start here*/ /*Player Selection f(x) & Start here*/
function playerSelectionCheck() {
  playerSelection = prompt(
    "Choose and start playing the game!",
    "ROCK, PAPER or SCISSOR"
  );
  playerSelection =
    playerSelection.toUpperCase(); /*This ignore case sensitive later*/
  if (
    !(
      playerSelection === "ROCK" ||
      playerSelection === "PAPER" ||
      playerSelection === "SCISSOR"
    )
  ) {
    playerSelectionCheck();
  } else {
    return playerSelection;
  }
} /*Player Selection f(x) & Finish here*/ /*Player Selection f(x) & Finish here*/

/*Tied Game check f(x) & Start here*/ /*Tied Game f(x) & Start here*/
function gameTied() {
  if (playerSelection === computerSelection) {
    gameWinner = "Tied game, try again!";
    winnedMatches -=1;
  } else {
    noTiedGame();
  }
  return gameWinner;
} /*Tied Game check f(x) & Finish here*/ /*Tied Game f(x) & Finish here*/

/*No tied game f(x) & Start here*/ /*No tied game f(x) & Start here*/
function noTiedGame() {
  gameWinner = "You win the match! You are amazing!";
  switch (playerSelection) {
    case "ROCK": {
      if (computerSelection === "PAPER") {
        gameWinner = "You lose!, PAPER beats ROCK";
        winnedMatches -=1;
      }
      break;
    }
    case "PAPER": {
      if (computerSelection === "SCISSOR") {
        gameWinner = "You lose!, SCISSOR beats PAPER";
        winnedMatches -=1;
      }
      break;
    }
    case "SCISSOR": {
      if (computerSelection === "ROCK") {
        gameWinner = "You lose!, ROCK beats SCISSOR";
        winnedMatches -=1;
      }
      break;
    }
  }
  return gameWinner;
} /*No tied game f(x) & Finish here*/ /*No tied game f(x) & Finish here*/

/*This is the game main F(x) & Start here*/ /*This is the game main F(x) & Start here*/
function game() {
  getComputerChoice();
  playerSelectionCheck();
  gameTied();
  alert(gameWinner);
  gameLoop(); /*5 times loop f(x) added on main */
} /*This is the game main F(x) & Finish Here*/ /*This is the game main F(x) & Finish here*/

/*This is the game loop f(x) & Start Here*/  /*This is the game loop f(x) & Start Here*/
function gameLoop() {
    if (i < 5){
        i+=1;
        game();
    }   else    {
        alert("Thanks for playing the game! You win " + winnedMatches + "matches!");
    }   
}
/*This is the game loop f(x) & Finish Here*/ /*This is the game loop f(x) & Finish Here*/

gameLoop();