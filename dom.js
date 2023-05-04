const sectionLanguage = document.querySelector("#sectionLanguage");
const sectionMain = document.querySelector("#sectionMain");
const sectionButtons = document.querySelector("#sectionButtons");

const spanish = document.querySelector("#flagSpanish");
const english = document.querySelector("#flagEnglish");
const h3SelectLanguage = document.querySelector("#h3SelectLanguage");
const h2Title = document.querySelector("#h2Title");
const h3SubTitle = document.querySelector("#h3SubTitle");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

const dictionarySpanish = [
  "Elije tu idioma",                      //  h3SelectLanguage
  "Vamos a jugar Piedra Papel o Tijera!", //  h2Title
  "Selecciona PIEDRA, PAPEL ó TIJERA!",   //  h3SubTitle
  "Piedra",                               //  button  1
  "Papel",                                //    "    2
  "Tijera",                               //    "    3
  "¡Empate, segui intentando!",           //  index.js/gamWinner
  "¡Increible! ¡Ganaste la partida!",     //    "
  "¡Perdiste!, ¡PAPEL envuelve PIEDRA!",
  "¡Perdiste!, ¡TIJERA corta PAPEL!",     //    "
  "¡Perdiste!, PIEDRA rompe TIJERA",
  "¡Ganaste ",                            // index.js/final msn
  " partidas en 5 intentos!",             // index.js/final msn
  "Elije nuevamente para seguir jugando!"
]; // Spa. dictionary words

const dictionaryEnglish = [
  "Choose your language",                 //  h3SelectLanguage
  "Lets Play Rock, Paper,Scissor!",       //  h2Title
  "Select Between ROCK PAPER SCISSORS!",  // h3SubTitle
  "Rock",                                 // button  1
  "Paper",                                //    "    2
  "Scissor",                              //    "    3
  "Tied game, try again!",                // index.js/gameWinner
  "You win the match! You are amazing!",  //    "
  "You lose!, PAPER beats ROCK",          //    "
  "You lose!, SCISSOR beats PAPER",       //    "
  "You lose!, ROCK beats SCISSOR",        //    "
  "You win ",                             // index.js/final msn
  " matches! in 5 Attempts!",             // index.js/final msn
  "Choose again if you want to play Again!"
]; // Eng. dictionary words

let dictionary = dictionaryEnglish; // Selected default dictionary

// Vars. initialized
h3SelectLanguage.textContent = dictionary[0];
h2Title.textContent = dictionary[1];
h3SubTitle.textContent = dictionary[2];
rock.textContent = dictionary[3];
paper.textContent = dictionary[4];
scissor.textContent = dictionary[5];
sectionLanguage.classList.add("clicked");
english.classList.add("clicked");

function translateSpanish(e) {
  if (languageCounter < 1){
  languageCounter+=1;
  sectionLanguage.classList.add("clicked");
  dictionary = dictionarySpanish;
  english.classList.remove("clicked", "click"); // remove if present
  h2Title.classList.remove("select");           // remove if present
  sectionMain.classList.remove("clicked");      // remove if present
  spanish.classList.add("click");
  h3SelectLanguage.classList.add("select");
  h3SelectLanguage.textContent = dictionary[0]; // later we make this a f() with all the words
  h2Title.textContent = dictionary[1];
  h3SubTitle.textContent = dictionary[2];
  rock.textContent = dictionary[3];
  paper.textContent = dictionary[4];
  scissor.textContent = dictionary[5];
  setTimeout(function () {
    spanish.classList.remove("click");
    h3SelectLanguage.classList.remove("select");
    sectionLanguage.classList.remove("clicked");
    sectionMain.classList.add("clicked");     // next step
    h2Title.classList.add("select");          // next step
  }, 2000);
  spanish.classList.add("clicked");
}
else{
  dictionary=dictionarySpanish;
  languageCounter=0;
  h3SelectLanguage.textContent = dictionary[0];
  rock.textContent = dictionary[3];
  paper.textContent = dictionary[4];
  scissor.textContent = dictionary[5];
}
}

function translateEnglish(e) {
  if (languageCounter < 1){
    languageCounter+=1;
  sectionLanguage.classList.add("clicked");
  dictionary = dictionaryEnglish;
  spanish.classList.remove("clicked", "click"); // remove if present
  h2Title.classList.remove("select");           // remove if present
  sectionMain.classList.remove("clicked");      // remove if present
  english.classList.add("click");
  h3SelectLanguage.classList.add("select");
  h3SelectLanguage.textContent = dictionary[0];
  h2Title.textContent = dictionary[1];
  h3SubTitle.textContent = dictionary[2];
  rock.textContent = dictionary[3];
  paper.textContent = dictionary[4];
  scissor.textContent = dictionary[5];
  setTimeout(function () {
    english.classList.remove("click");
    h3SelectLanguage.classList.remove("select");
    sectionLanguage.classList.remove("clicked");
    sectionMain.classList.add("clicked");       // next step
    h2Title.classList.add("select");            // next step
  }, 2000);
  english.classList.add("clicked");
  }
  else{
  dictionary=dictionaryEnglish;
  languageCounter=0;
  h3SelectLanguage.textContent = dictionary[0];
  rock.textContent = dictionary[3];
  paper.textContent = dictionary[4];
  scissor.textContent = dictionary[5];
}
}

spanish.addEventListener("click", translateSpanish, { capture: false }); // choose language spanish f()
english.addEventListener("click", translateEnglish, { capture: false }); // // choose language english f()

function rockSelection(e) {
  sectionButtons.classList.add("clicked")
  if (gameCounter<5){
  gameCounter+=1;
  playerSelection = "ROCK";
  getComputerChoice();
  gameTied();
  sectionLanguage.classList.remove("clicked"); // remove if present
  sectionMain.classList.remove("clicked");     // remove if present
  spanish.classList.remove("click");           // remove if present
  english.classList.remove("click");           // remove if present
  h3SelectLanguage.classList.remove("select"); // remove if present
  paper.classList.remove("clicked", "click");  // remove if present
  scissor.classList.remove("clicked", "click");// remove if present
  h2Title.classList.remove("select"); //// just remove
  rock.classList.add("clicked", "click", "fixWidth");
  setTimeout(function () {
    rock.classList.remove("click", "clicked", "fixWidth");
  }, 2000);
  h3SubTitle.textContent = gameWinner;
  h3SubTitle.classList.add("select");
  return {gameCounter, winnedMatches};
  }
  matchesCounter()
}

function paperSelection(e) {
  if (gameCounter<5){
  gameCounter+=1;
  playerSelection = "PAPER";
  getComputerChoice();
  gameTied();
  sectionLanguage.classList.remove("clicked"); // remove if present
  sectionMain.classList.remove("clicked");     // remove if present
  spanish.classList.remove("click");           // remove if present
  english.classList.remove("click");           // remove if present
  h3SelectLanguage.classList.remove("select"); // remove if present
  scissor.classList.remove("clicked", "click");// remove if present
  rock.classList.remove("clicked", "click");   // remove if present
  h2Title.classList.remove("select"); // just remove
  paper.classList.add("clicked", "click","fixWidth");
  setTimeout(function () {
    paper.classList.remove("click", "clicked","fixWidth");
  }, 2000);
  h3SubTitle.textContent = gameWinner;
  h3SubTitle.classList.add("select");
  return {gameCounter, winnedMatches};
  }
  matchesCounter()
}

function scissorSelection(e) {
  if (gameCounter<5){
  gameCounter+=1;
  playerSelection = "SCISSOR";
  getComputerChoice();
  gameTied();
  sectionLanguage.classList.remove("clicked");// remove if present
  sectionMain.classList.remove("clicked");    // remove if present
  spanish.classList.remove("click");          // remove if present
  english.classList.remove("click");          // remove if present
  h3SelectLanguage.classList.remove("select");// remove if present
  paper.classList.remove("clicked", "click"); // remove if present
  rock.classList.remove("clicked", "click");  // remove if present
  h2Title.classList.remove("select"); // just remove
  scissor.classList.add("clicked", "click", "fixWidth");
  setTimeout(function () {
    scissor.classList.remove("click", "clicked","fixWidth");
  }, 2000);
  h3SubTitle.textContent = gameWinner;
  h3SubTitle.classList.add("select");
  return {gameCounter, winnedMatches};
  }
  matchesCounter()
}

rock.addEventListener("click", rockSelection, { capture: false });
paper.addEventListener("click", paperSelection, { capture: false });
scissor.addEventListener("click", scissorSelection, { capture: false });
