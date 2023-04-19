let computerSelection = ""; /*Store the computer selection*/
let randomNumber =""; /*random number for computerSelection calcs*/
let playerSelection = ""; /*Store player selection input*/
let gameWinner = ""; /*Display the Output text at the end of each round*/
let i = 0; /*This is the loop counter var.*/
let winnedMatches = "5"; /*This count trough loses winned matches*/

function varInit() {
  /*Variables init f(x) for Game Replays & Start Here*/
  computerSelection = "";
  playerSelection = "";
  gameWinner = "";
  i = 0;
  winnedMatches = "5";
  return { computerSelection, playerSelection, gameWinner, i, winnedMatches };
}

function number(){
  randomNumber = Math.round(
    Math.random() * 10
  )
}

function getComputerChoice() {
  /*Computer Choice f(x) & Start here*/
  number();
  while (randomNumber == 0 || randomNumber == 10){
    number();
  }/*This makes a randomNumber from 1 to 9 and we give equal chances to every possibility*/
  computerSelection = "SCISSOR";
  if (randomNumber <= 3) {
    computerSelection = "ROCK";
  } else if (randomNumber <= 6) {
    computerSelection = "PAPER";
  }
  return computerSelection;
}

function playerSelectionCheck() {
  /*Player Selection f(x) & Start here*/
  playerSelection = prompt(
    "Choose and start playing the game!",
    "ROCK, PAPER or SCISSOR"
  );
  playerSelection =
    playerSelection.toUpperCase(); /*This helps ignoring case sensitive*/
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
}

function gameTied() {
  /*Tied Game check f(x) & Start here*/
  if (playerSelection === computerSelection) {
    gameWinner = "Tied game, try again!";
    winnedMatches -= 1;
  } else {
    noTiedGame();
  }
  return gameWinner;
}

function noTiedGame() {
  /*No tied game f(x) & Start here*/
  gameWinner = "You win the match! You are amazing!";
  switch (playerSelection) {
    case "ROCK": {
      if (computerSelection === "PAPER") {
        gameWinner = "You lose!, PAPER beats ROCK";
        winnedMatches -= 1;
      }
      break;
    }
    case "PAPER": {
      if (computerSelection === "SCISSOR") {
        gameWinner = "You lose!, SCISSOR beats PAPER";
        winnedMatches -= 1;
      }
      break;
    }
    case "SCISSOR": {
      if (computerSelection === "ROCK") {
        gameWinner = "You lose!, ROCK beats SCISSOR";
        winnedMatches -= 1;
      }
      break;
    }
  }
  return gameWinner;
}

function game() {
  /*This is the game main F(x) & Start here*/
  getComputerChoice();
  playerSelectionCheck();
  gameTied(); /*This f(x) call gameNoTied() and that combo give the first Result before the loop*/
  alert(gameWinner);
  gameLoop(); /*5 times loop f(x) added*/
}

gameLoop(); /*This is the game loop f(x) & Start Here*/
function gameLoop() {
  if (i < 5) {
    i += 1;
    game();
  } else {
    alert("You win " + winnedMatches + "matches!");
    let playAgain = prompt("Do you wanna play again?", "Type YES or NO");
    playAgain = playAgain.toUpperCase();
    if (playAgain === "YES") {
      varInit(); /*This f(x) start again all var. values*/
      gameLoop();
    } else {
      alert("Thanks for playing the game!");
    }
  }
}
