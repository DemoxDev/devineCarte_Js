import { Jeu } from '../source/Jeu.js';
import { PartieAJouer } from '../source/PartieAJouer.js';

const gameContainer = document.getElementById('game-container');
const game = new PartieAJouer();

document.getElementById("start-game").addEventListener("click", (event) => {
  event.preventDefault(); // prevent form submission and page refresh
  const cardNumber = document.querySelector("#card-number").value;
  const help = document.querySelector("#help").value;
  displayGame(cardNumber, help);
  document.querySelector("#game-container").style.display = "block";
  alert("Button clicked!");
});

document.getElementById("game-form").addEventListener("submit", (event) => {
  event.preventDefault();
  // Get user inputs
  const nb_cartes = cardNumber;
  if (nb_cartes == 32) {
    console.log("Création d'un paquet de 32 cartes");
    var paquetDeCartes = new Paquet(Paquet.createJeu32Cartes());
  } else {
    console.log("Création d'un paquet de 52 cartes");
    var paquetDeCartes = new Paquet(Paquet.createJeu52Cartes());
  }
  const aideStr = help;
  if(aideStr.toLowerCase == "oui") {
    const aide = true;
  }
  else { const aide = false; }
  
  const nomCarteInput = document.getElementById("nomCarte").value;
  const couleurCarteInput = document.getElementById("couleurCarte").value;

  // Your game logic goes here
  const jeu = new Jeu(aide, paquetDeCartes);
  console.log(nb_cartes);
  console.log(aideStr);

});


function renderGame() {
  // Add code here to update the HTML with the current game state
}

function handleUserInput(event) {
  // Add code here to handle user input and update the game state
}

document.addEventListener('DOMContentLoaded', () => {
  renderGame();
  document.addEventListener('click', handleUserInput);
});
