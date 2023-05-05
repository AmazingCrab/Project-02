/*section containers*/ 
const sectionLanguage = document.querySelector("#sectionLanguage");
const sectionMain = document.querySelector("#sectionMain");
const sectionButtons = document.querySelector("#sectionButtons");
/*flags and titles*/
const spanish = document.querySelector("#flagSpanish");
const english = document.querySelector("#flagEnglish");
const h3SelectLanguage = document.querySelector("#h3SelectLanguage");
const h2Title = document.querySelector("#h2Title");
const h3SubTitle = document.querySelector("#h3SubTitle");
const h1Title = document.querySelector("#h1Title");
const h2GameCounter = document.querySelector("#h2GameCounter")
/*buttons*/
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

const dictionarySpanish = [                 //  Index | Spa. dictionary words:
  "Elije tu idioma",                        //  0     |  h3SelectLanguage
  "Vamos a jugar Piedra Papel o Tijera!",   //  1     |  h2Title
  "Selecciona PIEDRA, PAPEL ó TIJERA!",     //  2     |  h3SubTitle
  "Piedra",                                 //  3     |  button  1
  "Papel",                                  //  4     |    "    2
  "Tijera",                                 //  5     |    "    3
  "¡Empate, segui intentando!",             //  6     |  index.js/gamWinner
  "¡Increible! ¡Ganaste la partida!",       //  7     |    "
  "¡Perdiste!, ¡PAPEL envuelve PIEDRA!",    //  8     |    "
  "¡Perdiste!, ¡TIJERA corta PAPEL!",       //  9     |    "
  "¡Perdiste!, PIEDRA rompe TIJERA",        //  10    |    "
  "¡Ganaste ",                              //  11    |  index.js/final msn
  " partidas en 5 intentos!",               //  12    |  index.js/final msn
  "Elije nuevamente para seguir jugando!",  //  13    |  h2Title
  "Juego piedra Papel o Tijera",            //  14    |  h1Title
  " Victoria",                              //  15    |  part of h2GameCounter
  " Intento",                               //  16    |  part of      " 
  " de 5 Partidas"                         //  17    |  part of      "
]; 

const dictionaryEnglish = [                 //  Index | Eng. dictionary words:
  "Choose your language",                   //  0     |  h3SelectLanguage
  "Lets Play Rock, Paper,Scissor!",         //  1     |  h2Title
  "Select Between ROCK PAPER SCISSORS!",    //  2     |  h3SubTitle
  "Rock",                                   //  3     |  button  1
  "Paper",                                  //  4     |     "    2
  "Scissor",                                //  5     |     "    3
  "Tied game, try again!",                  //  6     |  index.js/gameWinner
  "You win the match! You are amazing!",    //  7     |     "
  "You lose!, PAPER beats ROCK",            //  8     |     "
  "You lose!, SCISSOR beats PAPER",         //  9     |     "
  "You lose!, ROCK beats SCISSOR",          //  10    |     "
  "You win ",                               //  11    |  index.js/final msn
  " matches! in 5 Attempts!",               //  12    |  index.js/final msn
  "Choose again if you want to play Again!",//  13    |  h2Title
  "Rock Paper Scissor Game",                //  14    |  h1Title
  " Win",                                   //  15    |  part of h2GameCounter
  " Attempt",                               //  16    |  part of      " 
  " of 5 Matches"                          //  17    |  part of      " 
]; 

let dictionary = dictionaryEnglish;   // Selected default dictionary

// English Language initialized
h3SelectLanguage.textContent = dictionary[0];
h2Title.textContent = dictionary[1];
h3SubTitle.textContent = dictionary[2];
rock.textContent = dictionary[3];
paper.textContent = dictionary[4];
scissor.textContent = dictionary[5];
h1Title.textContent = dictionary[14];
h2GameCounter.textContent = "";
sectionLanguage.classList.add("clicked");
english.classList.add("clicked");

function translateSpanish(e) { // Should use add/remove on classList, because switching from language can make problems if toggle is used.
  if (dictionary === dictionaryEnglish) {
    h2Title.textContent = 
      dictionarySpanish[dictionaryEnglish.indexOf(h2Title.innerHTML)]; // this four indexof() set dynamic content
    h3SubTitle.textContent =
      dictionarySpanish[dictionaryEnglish.indexOf(h3SubTitle.innerHTML)];
    h3SelectLanguage.textContent =
      dictionarySpanish[dictionaryEnglish.indexOf(h3SelectLanguage.innerHTML)];
    h2GameCounter.textContent =
      dictionarySpanish[dictionaryEnglish.indexOf(h2GameCounter.innerHTML)]
    rock.textContent = dictionarySpanish[3];  // this four vars.tex.dic set static content  
    paper.textContent = dictionarySpanish[4]; 
    scissor.textContent = dictionarySpanish[5]; 
    h1Title.textContent = dictionarySpanish[14];  
    switch (attemptNumber){ // This fix singular/plural names in h2gameCounter
      case 0:{
        h2GameCounter.textContent = "";
        break;
      }
      case 1:{
        h2GameCounter.textContent = wins + dictionarySpanish[15] + " " + attemptNumber + dictionarySpanish[16] + " " + dictionarySpanish[17];
        break;
      }
      case 2,3,4,5:{
        h2GameCounter.textContent = wins + dictionarySpanish[15] + "s "+ attemptNumber + dictionarySpanish[16] + "s " + dictionarySpanish[17];
        break;
      }
      }
    }
  dictionary = dictionarySpanish;
  sectionLanguage.classList.add("clicked");
  spanish.classList.add("click");
  h3SelectLanguage.classList.add("select");
  english.classList.remove("clicked", "click"); // remove if present
  h2Title.classList.remove("select");           //   "    if    " 
  sectionMain.classList.remove("clicked");      //   "    if    "
  setTimeout(function () {
    spanish.classList.remove("click");
    h3SelectLanguage.classList.remove("select");
    sectionLanguage.classList.remove("clicked");
    sectionMain.classList.add("clicked");     // next step/section
    h2Title.classList.add("select");          // next  "  /   "
  }, 2000);
  spanish.classList.add("clicked");           //flag selected
  return { dictionary };
}

function translateEnglish(e) {
  if (dictionary == dictionarySpanish) {
    h2Title.textContent =
      dictionaryEnglish[dictionarySpanish.indexOf(h2Title.innerHTML)];// this four indexof() set dynamic content
    h3SubTitle.textContent =
      dictionaryEnglish[dictionarySpanish.indexOf(h3SubTitle.innerHTML)];
    h3SelectLanguage.textContent =
      dictionaryEnglish[dictionarySpanish.indexOf(h3SelectLanguage.innerHTML)];
    h2GameCounter.textContent = 
      dictionarySpanish[dictionarySpanish.indexOf(h2GameCounter.innerHTML)];
    rock.textContent = dictionaryEnglish[3];  // this four vars.tex.dic set static content  
    paper.textContent = dictionaryEnglish[4]; 
    scissor.textContent = dictionaryEnglish[5]; 
    h1Title.textContent = dictionaryEnglish[14];  
    switch (attemptNumber){ // This fix singular/plural names in h2gameCounter
      case 0:{
        h2GameCounter.textContent = "";
        break;
      }
      case 1:{
        h2GameCounter.textContent = wins + dictionaryEnglish[15] + " " + attemptNumber + dictionaryEnglish[16] + " " + dictionaryEnglish[17];
        break;
      }
      case 2,3,4,5:{
        h2GameCounter.textContent = wins + dictionaryEnglish[15] + "s "+ attemptNumber + dictionaryEnglish[16] + "s " + dictionaryEnglish[17];
        break;
      }
      }  
  }
  dictionary = dictionaryEnglish;
  sectionLanguage.classList.add("clicked");
  english.classList.add("click");
  h3SelectLanguage.classList.add("select");
  spanish.classList.remove("clicked", "click"); // remove if present
  h2Title.classList.remove("select");           //   "    if    "
  sectionMain.classList.remove("clicked");      //   "    if    "
  setTimeout(function () {
    english.classList.remove("click");
    h3SelectLanguage.classList.remove("select");
    sectionLanguage.classList.remove("clicked");
    sectionMain.classList.add("clicked");       // next step/section
    h2Title.classList.add("select");            // next  "  /   "
  }, 2000);
  english.classList.add("clicked");             //flag selected
  return { dictionary };
}

function removeIfPresent(){
  sectionLanguage.classList.remove("clicked");    // remove if present
  sectionMain.classList.remove("clicked");        //   "    if    "
  spanish.classList.remove("click");              //   "    if    "
  english.classList.remove("click");              //   "    if    "
  h3SelectLanguage.classList.remove("select");    //   "    if    "
  paper.classList.remove("clicked", "click");     //   "    if    "
  scissor.classList.remove("clicked", "click");   //   "    if    "
  h2Title.classList.remove("select");             // just remove
}

function rockSelection(e) {     //  rock button (for click event)
  if (dictionary.indexOf(h2Title.innerHTML) === 13 && fiveMatches === true){ //This fix title for match 6x
    h2Title.textContent = dictionary[1];
    fiveMatches = false;   
    }
  sectionButtons.classList.add("clicked");
  h2GameCounter.classList.add("select");
  if (gameCounter < 5) {
    gameCounter += 1;
    playerSelection = "ROCK";
    getComputerChoice();  // exist on index.js
    gameTied();           //   "   on   "
    removeIfPresent();
    rock.classList.add("clicked", "click", "fixWidth");
    setTimeout(function () {
      rock.classList.remove("click", "clicked", "fixWidth");
    }, 2000);
    h3SubTitle.textContent = gameWinner;
    h3SubTitle.classList.add("select");
    if (attemptNumber == 1){
      h2GameCounter.textContent = wins + dictionary[15] + " " + attemptNumber + dictionary[16] + " " + dictionary[17];
    }else
      h2GameCounter.textContent = wins + dictionary[15] + "s "+ attemptNumber + dictionary[16] + "s " + dictionary[17];
    return { gameCounter, winnedMatches };
  }
  matchesCounter();  // exist on index.js
}

function paperSelection(e) {    //paper button (for click event)
  if (dictionary.indexOf(h2Title.innerHTML) === 13  && fiveMatches === true){ //This fix title for match 6x
    h2Title.textContent = dictionary[1];
    fiveMatches = false;   
    }
  sectionButtons.classList.add("clicked");
  h2GameCounter.classList.add("select");
  if (gameCounter < 5) {
    gameCounter += 1;
    playerSelection = "PAPER";
    getComputerChoice();  // exist on index.js
    gameTied();           //   "   on   "
    removeIfPresent();
    paper.classList.add("clicked", "click", "fixWidth");
    setTimeout(function () {
      paper.classList.remove("click", "clicked", "fixWidth");
    }, 2000);
    h3SubTitle.textContent = gameWinner;
    h3SubTitle.classList.add("select"); 
    if (attemptNumber == 1){
      h2GameCounter.textContent = wins + dictionary[15] + " " + attemptNumber + dictionary[16] + " " + dictionary[17];
    }else
      h2GameCounter.textContent = wins + dictionary[15] + "s "+ attemptNumber + dictionary[16] + "s " + dictionary[17];
    return { gameCounter, winnedMatches };
  }
  matchesCounter();  // exist on index.js
}

function scissorSelection(e) {    //scissor button (for click event)
  if (dictionary.indexOf(h2Title.innerHTML) === 13  && fiveMatches === true){ //This fix title for match 6x
    h2Title.textContent = dictionary[1];
    fiveMatches = false;   
    }
  sectionButtons.classList.add("clicked");
  h2GameCounter.classList.add("select");
  if (gameCounter < 5) {
    gameCounter += 1;
    playerSelection = "SCISSOR";
    getComputerChoice();  // exist on index.js
    gameTied();           //   "   on   "
    removeIfPresent();
    scissor.classList.add("clicked", "click", "fixWidth");
    setTimeout(function () {
      scissor.classList.remove("click", "clicked", "fixWidth");
    }, 2000);
    h3SubTitle.textContent = gameWinner;
    h3SubTitle.classList.add("select");
    if (attemptNumber == 1){
      h2GameCounter.textContent = wins + dictionary[15] + " " + attemptNumber + dictionary[16] + " " + dictionary[17];
    }else
      h2GameCounter.textContent = wins + dictionary[15] + "s "+ attemptNumber + dictionary[16] + "s " + dictionary[17];
    return { gameCounter, winnedMatches };
  }
  matchesCounter();  // exist on index.js
}

function main ()  {
  spanish.addEventListener("click", translateSpanish, { capture: false }); // choose language spanish f()
  english.addEventListener("click", translateEnglish, { capture: false }); // // choose language english f()
  // Listen buttons Events
  rock.addEventListener("click", rockSelection, { capture: false });
  paper.addEventListener("click", paperSelection, { capture: false });
  scissor.addEventListener("click", scissorSelection, { capture: false });
}

main ();
