const sectionLanguage = document.querySelector("#sectionLanguage");
const sectionMain = document.querySelector("#sectionMain");
const sectionBackImage = document.querySelector("#sectionBackImage");

const spanish = document.querySelector("#flagSpanish");
const english = document.querySelector("#flagEnglish");
const h3 = document.querySelector("h3");
const h2 = document.querySelector("h2");

const dictionarySpanish = [
    "Elije tu idioma",    //h3 
    "Vamos a jugar Piedra Papel o Tijera!",   // h2
  ]; // Spa. dictionary words
  
const dictionaryEnglish = [
    "Choose your language",   //h3 
    "Lets Play Rock, Paper,Scissor!", // h2
  ]; // Eng. dictionary words

let dictionary = dictionaryEnglish; // Selected default dictionary

// Vars. initialized 
h3.textContent = dictionary[0];
h2.textContent = dictionary[1];
sectionLanguage.classList.add('clicked');

