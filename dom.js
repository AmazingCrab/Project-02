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

const dictionarySpanish = [                 // Spa. dictionary words:
  "Elije tu idioma",                        //  h3SelectLanguage
  "Vamos a jugar Piedra Papel o Tijera!",   //  h2Title
  "Selecciona PIEDRA, PAPEL ó TIJERA!",     //  h3SubTitle
  "Piedra",                                 //  button  1
  "Papel",                                  //    "    2
  "Tijera",                                 //    "    3
  "¡Empate, segui intentando!",             //  index.js/gamWinner
  "¡Increible! ¡Ganaste la partida!",       //    "
  "¡Perdiste!, ¡PAPEL envuelve PIEDRA!",    //    "
  "¡Perdiste!, ¡TIJERA corta PAPEL!",       //    "
  "¡Perdiste!, PIEDRA rompe TIJERA",        //    "
  "¡Ganaste ",                              //  index.js/final msn
  " partidas en 5 intentos!",               //  index.js/final msn
  "Elije nuevamente para seguir jugando!",  //  h2Title
]; 

const dictionaryEnglish = [                 // Eng. dictionary words:
  "Choose your language",                   //  h3SelectLanguage
  "Lets Play Rock, Paper,Scissor!",         //  h2Title
  "Select Between ROCK PAPER SCISSORS!",    // h3SubTitle
  "Rock",                                   // button  1
  "Paper",                                  //    "    2
  "Scissor",                                //    "    3
  "Tied game, try again!",                  // index.js/gameWinner
  "You win the match! You are amazing!",    //    "
  "You lose!, PAPER beats ROCK",            //    "
  "You lose!, SCISSOR beats PAPER",         //    "
  "You lose!, ROCK beats SCISSOR",          //    "
  "You win ",                               // index.js/final msn
  " matches! in 5 Attempts!",               // index.js/final msn
  "Choose again if you want to play Again!",// h2Title
]; 

let dictionary = dictionaryEnglish; // Selected default dictionary

// English Language initialized
h3SelectLanguage.textContent = dictionary[0];
h2Title.textContent = dictionary[1];
h3SubTitle.textContent = dictionary[2];
rock.textContent = dictionary[3];
paper.textContent = dictionary[4];
scissor.textContent = dictionary[5];
sectionLanguage.classList.add("clicked");
english.classList.add("clicked");

function translateSpanish(e) { // Should use add/remove on classList, because switching from language can make problems if toggle is used.
  if (dictionary == dictionaryEnglish) {
    h2Title.textContent =
      dictionarySpanish[dictionaryEnglish.indexOf(h2Title.innerHTML)];
    h3SubTitle.textContent =
      dictionarySpanish[dictionaryEnglish.indexOf(h3SubTitle.innerHTML)];
    h3SelectLanguage.textContent =
      dictionarySpanish[dictionaryEnglish.indexOf(h3SelectLanguage.innerHTML)];
    rock.textContent = dictionarySpanish[3];
    paper.textContent = dictionarySpanish[4];
    scissor.textContent = dictionarySpanish[5];
  }
  dictionary = dictionarySpanish;
  sectionLanguage.classList.add("clicked");
  spanish.classList.add("click");
  h3SelectLanguage.classList.add("select");
  english.classList.remove("clicked", "click"); // remove if present
  h2Title.classList.remove("select");           // remove if present
  sectionMain.classList.remove("clicked");      // remove if present
  setTimeout(function () {
    spanish.classList.remove("click");
    h3SelectLanguage.classList.remove("select");
    sectionLanguage.classList.remove("clicked");
    sectionMain.classList.add("clicked");     // next step/section
    h2Title.classList.add("select");          // next step/section
  }, 2000);
  spanish.classList.add("clicked");           //flag selected
  return { dictionary };
}

function translateEnglish(e) {
  if (dictionary == dictionarySpanish) {
    h2Title.textContent =
      dictionaryEnglish[dictionarySpanish.indexOf(h2Title.innerHTML)];
    h3SubTitle.textContent =
      dictionaryEnglish[dictionarySpanish.indexOf(h3SubTitle.innerHTML)];
    h3SelectLanguage.textContent =
      dictionaryEnglish[dictionarySpanish.indexOf(h3SelectLanguage.innerHTML)];
    rock.textContent = dictionaryEnglish[3];
    paper.textContent = dictionaryEnglish[4];
    scissor.textContent = dictionaryEnglish[5];
  }
  dictionary = dictionaryEnglish;
  sectionLanguage.classList.add("clicked");
  english.classList.add("click");
  h3SelectLanguage.classList.add("select");
  spanish.classList.remove("clicked", "click"); // remove if present
  h2Title.classList.remove("select");           // remove if present
  sectionMain.classList.remove("clicked");      // remove if present
  setTimeout(function () {
    english.classList.remove("click");
    h3SelectLanguage.classList.remove("select");
    sectionLanguage.classList.remove("clicked");
    sectionMain.classList.add("clicked");       // next step/section
    h2Title.classList.add("select");            // next step/section
  }, 2000);
  english.classList.add("clicked");             //flag selected
  return { dictionary };
}

function removeIfPresent(){
  sectionLanguage.classList.remove("clicked");    // remove if present
  sectionMain.classList.remove("clicked");        // remove if present
  spanish.classList.remove("click");              // remove if present
  english.classList.remove("click");              // remove if present
  h3SelectLanguage.classList.remove("select");    // remove if present
  paper.classList.remove("clicked", "click");     // remove if present
  scissor.classList.remove("clicked", "click");   // remove if present
  h2Title.classList.remove("select");             // just remove
}

function rockSelection(e) {
  sectionButtons.classList.add("clicked");
  if (gameCounter < 5) {
    gameCounter += 1;
    playerSelection = "ROCK";
    getComputerChoice();
    gameTied();
    removeIfPresent();
    rock.classList.add("clicked", "click", "fixWidth");
    setTimeout(function () {
      rock.classList.remove("click", "clicked", "fixWidth");
    }, 2000);
    h3SubTitle.textContent = gameWinner;
    h3SubTitle.classList.add("select");
    return { gameCounter, winnedMatches };
  }
  matchesCounter();
}

function paperSelection(e) {
  sectionButtons.classList.add("clicked");
  if (gameCounter < 5) {
    gameCounter += 1;
    playerSelection = "PAPER";
    getComputerChoice();
    gameTied();
    removeIfPresent();
    paper.classList.add("clicked", "click", "fixWidth");
    setTimeout(function () {
      paper.classList.remove("click", "clicked", "fixWidth");
    }, 2000);
    h3SubTitle.textContent = gameWinner;
    h3SubTitle.classList.add("select");
    return { gameCounter, winnedMatches };
  }
  matchesCounter();
}

function scissorSelection(e) {
  sectionButtons.classList.add("clicked");
  if (gameCounter < 5) {
    gameCounter += 1;
    playerSelection = "SCISSOR";
    getComputerChoice();
    gameTied();
    removeIfPresent();
    scissor.classList.add("clicked", "click", "fixWidth");
    setTimeout(function () {
      scissor.classList.remove("click", "clicked", "fixWidth");
    }, 2000);
    h3SubTitle.textContent = gameWinner;
    h3SubTitle.classList.add("select");
    return { gameCounter, winnedMatches };
  }
  matchesCounter();
}

function game ()  {

spanish.addEventListener("click", translateSpanish, { capture: false }); // choose language spanish f()
english.addEventListener("click", translateEnglish, { capture: false }); // // choose language english f()

// Listen buttons Events
rock.addEventListener("click", rockSelection, { capture: false });
paper.addEventListener("click", paperSelection, { capture: false });
scissor.addEventListener("click", scissorSelection, { capture: false });
}
game ();
