const sectionLanguage = document.querySelector("#sectionLanguage");
const sectionMain = document.querySelector("#sectionMain");
const sectionButtons = document.querySelector("#sectionBackImage");

const spanish = document.querySelector("#flagSpanish");
const english = document.querySelector("#flagEnglish");
const h3SelectLenguage = document.querySelector("#h3SelectLenguage");
const h2Title = document.querySelector("#h2Title");
const h3SubTitle = document.querySelector("#h3SubTitle");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

const dictionarySpanish = [
  "Elije tu idioma", //h3SelectLenguage
  "Vamos a jugar Piedra Papel o Tijera!", //h2Title
  "Selecciona PIEDRA, PAPEL ó TIJERA!", //h3SubTitle
  "Piedra", // button 1
  "Papel", // button 2
  "Tijera", // button 3
]; // Spa. dictionary words

const dictionaryEnglish = [
  "Choose your language", //h3SelectLenguage
  "Lets Play Rock, Paper,Scissor!", //h2Title
  "Select Between ROCK PAPER SCISSORS!", //h3SubTitle
  "Rock", // button 1
  "Paper", // button 2
  "Scissor", // button 3
]; // Eng. dictionary words

let dictionary = dictionaryEnglish; // Selected default dictionary

// Vars. initialized
h3SelectLenguage.textContent = dictionary[0];
h2Title.textContent = dictionary[1];
h3SubTitle.textContent = dictionary[2];
rock.textContent = dictionary[3];
paper.textContent = dictionary[4];
scissor.textContent = dictionary[5];
sectionLanguage.classList.add("clicked");

function translateSpanish(e) {
  sectionLanguage.classList.add("clicked");
  dictionary = dictionarySpanish;
  english.classList.remove("clicked", "click"); // remove if present
  h2Title.classList.remove("select"); // remove if present
  sectionMain.classList.remove("clicked"); // remove if present
  spanish.classList.add("click");
  h3SelectLenguage.classList.add("select");
  h3SelectLenguage.textContent = dictionary[0]; // later we make this a f() with all the words
  h2Title.textContent = dictionary[1];
  h3SubTitle.textContent = dictionary[2];
  rock.textContent = dictionary[3];
  paper.textContent = dictionary[4];
  scissor.textContent = dictionary[5];
  setTimeout(function () {
    spanish.classList.remove("click");
    h3SelectLenguage.classList.remove("select");
    sectionLanguage.classList.remove("clicked");
    sectionMain.classList.add("clicked"); // next step
    h2Title.classList.add("select"); // next step
  }, 2000);
  spanish.classList.add("clicked");
}

function translateEnglish(e) {
  sectionLanguage.classList.add("clicked");
  dictionary = dictionaryEnglish;
  spanish.classList.remove("clicked", "click"); // remove if present
  h2Title.classList.remove("select"); // remove if present
  sectionMain.classList.remove("clicked"); // remove if present
  english.classList.add("click");
  h3SelectLenguage.classList.add("select");
  h3SelectLenguage.textContent = dictionary[0];
  h2Title.textContent = dictionary[1];
  h3SubTitle.textContent = dictionary[2];
  rock.textContent = dictionary[3];
  paper.textContent = dictionary[4];
  scissor.textContent = dictionary[5];
  setTimeout(function () {
    english.classList.remove("click");
    h3SelectLenguage.classList.remove("select");
    sectionLanguage.classList.remove("clicked");
    sectionMain.classList.add("clicked"); // next step
    h2Title.classList.add("select"); // next step
  }, 2000);
  english.classList.add("clicked");
}

spanish.addEventListener("click", translateSpanish, { capture: false }); // choose lenguage spanish f()
english.addEventListener("click", translateEnglish, { capture: false }); // // choose lenguage english f()

function rockSelection(e) {
  sectionLanguage.classList.remove("clicked");  // remove if present
  sectionMain.classList.remove("clicked");  // remove if present
  spanish.classList.remove("click");  // remove if present
  english.classList.remove("click");  // remove if present
  h3SelectLenguage.classList.remove("select");  // remove if present
  h2Title.classList.remove("select"); //// just remove
  rock.classList.add("clicked","click");
  playerSelection = "ROCK";
  setTimeout(function () {
    rock.classList.remove("click");
  }, 2000);
  playerSelection();
}

function paperSelection(e) {
  sectionLanguage.classList.remove("clicked");  // remove if present
  sectionMain.classList.remove("clicked");  // remove if present
  spanish.classList.remove("click");  // remove if present
  english.classList.remove("click");  // remove if present
  h3SelectLenguage.classList.remove("select");  // remove if present
  h2Title.classList.remove("select"); // just remove
  paper.classList.add("clicked","click");
  playerSelection = "PAPER";
  setTimeout(function () {
    paper.classList.remove("click");
  }, 2000);
  playerSelection();
}

function scissorSelection(e) {
  sectionLanguage.classList.remove("clicked");  // remove if present
  sectionMain.classList.remove("clicked");  // remove if present
  spanish.classList.remove("click");  // remove if present
  english.classList.remove("click");  // remove if present
  h3SelectLenguage.classList.remove("select");  // remove if present
  h2Title.classList.remove("select"); // just remove
  scissor.classList.add("clicked","click");
  playerSelection = "SCISSOR";
  setTimeout(function () {
    scissor.classList.remove("click");
  }, 2000);
playerSelection();
}

rock.addEventListener("click", rockSelection, { capture: false });
paper.addEventListener("click", paperSelection, { capture: false });
scissor.addEventListener("click", scissorSelection, { capture: false });

computerSelection();
