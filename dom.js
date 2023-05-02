const sectionLanguage = document.querySelector("#sectionLanguage");
const sectionMain = document.querySelector("#sectionMain");
const sectionBackImage = document.querySelector("#sectionBackImage");

const spanish = document.querySelector("#flagSpanish");
const english = document.querySelector("#flagEnglish");
const h3SelectLenguage = document.querySelector("#h3SelectLenguage");
const h2Title = document.querySelector("#h2Title");
const h3SubTitle = document.querySelector("#h3SubTitle");

const dictionarySpanish = [
    "Elije tu idioma",    //h3SelectLenguage 
    "Vamos a jugar Piedra Papel o Tijera!",
    "Selecciona PIDRA, PAPEL ó TIJERA!"   // h2Title
  ]; // Spa. dictionary words
  
const dictionaryEnglish = [
    "Choose your language",   //h3SelectLenguage 
    "Lets Play Rock, Paper,Scissor!",
    "Select Between ROCK PAPER SCISSORS!" // h2Title
  ]; // Eng. dictionary words

let dictionary = dictionaryEnglish; // Selected default dictionary

// Vars. initialized 
h3SelectLenguage.textContent = dictionary[0];
h3SubTitle.textContent = dictionary[2];
h2Title.textContent = dictionary[1];
sectionLanguage.classList.add('clicked');

function translateSpanish(e) {
    sectionLanguage.classList.add('clicked');
    dictionary = dictionarySpanish;
    english.classList.remove("clicked", "click"); // remove if present
    h2Title.classList.remove('select');  // remove if present
    sectionMain.classList.remove('clicked'); // remove if present
    spanish.classList.add("click");
    h3SelectLenguage.classList.add("select");
    h3SelectLenguage.textContent = dictionary[0]; // later we make this a f() with all the words
    h2Title.textContent = dictionary[1];
    h3SubTitle.textContent = dictionary [2];
    setTimeout(function () {
      spanish.classList.remove("click");
      h3SelectLenguage.classList.remove("select");
      sectionLanguage.classList.remove('clicked');
      sectionMain.classList.add('clicked');   // next step
      h2Title.classList.add('select'); // next step
    }, 2000);
    spanish.classList.add("clicked");
  }
  
  function translateEnglish(e) {
    sectionLanguage.classList.add('clicked');
    dictionary = dictionaryEnglish;
    spanish.classList.remove("clicked", "click"); // remove if present
    h2Title.classList.remove('select');  // remove if present
    sectionMain.classList.remove('clicked'); // remove if present
    english.classList.add("click");
    h3SelectLenguage.classList.add("select");
    h3SelectLenguage.textContent = dictionary[0];
    h2Title.textContent = dictionary[1];
    h3SubTitle.textContent = dictionary[2]
    setTimeout(function () {
      english.classList.remove("click");
      h3SelectLenguage.classList.remove("select");
      sectionLanguage.classList.remove('clicked');
      sectionMain.classList.add('clicked'); // next step
      h2Title.classList.add('select'); // next step
    }, 2000);
    english.classList.add("clicked");
  }
  
  spanish.addEventListener("click", translateSpanish, { capture: false });
  english.addEventListener("click", translateEnglish, { capture: false });

