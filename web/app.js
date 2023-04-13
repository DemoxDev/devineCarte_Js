import { Jeu } from '../source/Jeu.js';
import { Carte } from "../source/Carte.js";
import { NomCarte } from "../source/NomCarte.js";
import { Couleur } from "../source/Couleur.js";
import { Paquet } from "../source/Paquet.js";

const gameContainer = document.getElementById('game-container');
let cardNumber, help, aide, paquetDeCartes, jeu, retenter;

// Hide the game form initially
document.querySelector("#game-form").style.display = "none";

// Get the form-elements div
var formElements = document.getElementById("form-elements");

// Get the start-game button
var startButton = document.getElementById("start-game");


document.getElementById("start-game").addEventListener("click", (event) => {
  event.preventDefault(); // prevent form submission and page refresh
  

  cardNumber = document.querySelector("#card-number").value;
  help = document.querySelector("#help").value;
  console.log(help);

  if (cardNumber == 32) {
    console.log("Création d'un paquet de 32 cartes");
    paquetDeCartes = new Paquet(Paquet.createJeu32Cartes());
  } else {
    console.log("Création d'un paquet de 52 cartes");
    paquetDeCartes = new Paquet(Paquet.createJeu52Cartes());
  }
  if(help.toLowerCase() == "yes") {
    aide = true;
  }
  else { aide = false; }

  const nomCarteInput = document.getElementById("nomCarte").value;
  const couleurCarteInput = document.getElementById("couleurCarte").value;

  // Your game logic goes here
  const jeu = new Jeu(aide, paquetDeCartes);
  console.log(cardNumber);

  var retenter = true;
  jeu.essaisTab.push([]);
  jeu.essaisTab[0][0] = 0; // Nb d'essais, incrémenté à chaque fois que retenter est vrai
  jeu.essaisTab[0][1] = jeu.avecAide; // Stocker une valeur booléenne indiquant si le joueur utilise de l'aide ou pas
  jeu.essaisTab[0][2] = null; // Stocker une valeur nulle pour remplir les cases vides
  while (retenter == true) {
    retenter = ""; //On donne un type autre que booléen pour permettre le choix plus bas
    jeu.essaisTab[0][0]++;
    alert("Essai n°" + jeu.essaisTab[0][0]);
    //Saisie du nom de la carte
    let nomSaisi = window.prompt(
      "Entrez un nom de carte dans le jeu (exemples : Roi, sept, six, As...) : "
    );
    let nomCarte = NomCarte.getNomCarteFromString(nomSaisi);
    while (nomCarte === null) {
      nomSaisi = window.prompt(
      "Cette carte n'existe pas. Entrez un nom de carte dans le jeu (exemples : Roi, sept, six, As...) : "
      );
      nomCarte = NomCarte.getNomCarteFromString(nomSaisi);
    }
    console.log("Carte choisie: " + nomCarte);

    //Saisie de la couleur de la carte
    let couleurCarte = Couleur.getCouleurCarteFromString(
      window.prompt(
        'Entrez un nom de "couleur" de carte parmi : Pique, Trefle, Coeur, Carreau : '
      )
    );
    while (couleurCarte === null) {
      couleurCarte = Couleur.getCouleurCarteFromString(
      window.prompt(
        'Cette couleur n\'existe pas. Entrez un nom de "couleur" de carte parmi : Pique, Trefle, Coeur, Carreau : '
      )
    );
    }

    console.log("Couleur choisie: " + couleurCarte);

    //Si la carte existe, on peut jouer, sinon on affiche une erreur
    if (nomCarte != null && couleurCarte != null) {
      const carteJoueur = new Carte(nomCarte, couleurCarte);

      jeu.essaisTab.push([]);
      jeu.essaisTab[jeu.essaisTab[0][0]][0] = carteJoueur;

      //Si la carte saisie était la carte à deviner
      if (jeu.isMatch(carteJoueur)) {
        console.log(
          "Bravo, vous avez trouvé la bonne carte en " +
            jeu.essaisTab[0][0] +
            " essais !"
        );
        jeu.essaisTab[jeu.essaisTab[0][0]][1] = null;
        jeu.essaisTab[jeu.essaisTab[0][0]][2] = null;
        break;
      } else {
        alert("Ce n'est pas la carte qu'il fallait deviner !");
        console.log("Ce n'est pas la carte qu'il fallait deviner !");
        console.log("Vous avez proposé: " + carteJoueur.toString());

        // Si l'aide est activée, alors dire si la carte proposée est
        // plus petite ou plus grande que la carte à deviner

        if (jeu.avecAide) {
          const codeComparaison = carteJoueur.compareTo(
            jeu.carteADeviner
          );
          let helpMsg = "";
          // Comparaison de la valeur
          if (codeComparaison == -1) {
            helpMsg += "La carte à deviner est plus grande";
          } else if (codeComparaison == 1) {
            helpMsg += "La carte à deviner est plus petite";
          } else {
            helpMsg += "La carte a deviner a la même valeur";
          }
          // Comparaison de la couleur
          let memeCouleur;
          if (carteJoueur.couleur == jeu.carteADeviner.couleur) {
            helpMsg += " et a la même couleur.";
            memeCouleur = true;
          } else {
            helpMsg += " et a une couleur différente.";
            memeCouleur = false;
          }
          alert(helpMsg);
          jeu.essaisTab[jeu.essaisTab[0][0]][1] = codeComparaison;
          jeu.essaisTab[jeu.essaisTab[0][0]][2] = memeCouleur;
        } else {
          jeu.essaisTab[jeu.essaisTab[0][0]][1] = null;
          jeu.essaisTab[jeu.essaisTab[0][0]][2] = null;
        }
      }
    } else {
      console.log("La carte saisie n'existe pas dans ce paquet !");

      jeu.essaisTab[jeu.essaisTab[0][0]][0] = null;
      jeu.essaisTab[jeu.essaisTab[0][0]][1] = null;
      jeu.essaisTab[jeu.essaisTab[0][0]][2] = null;
    }
    while (retenter !== true && retenter !== false) {
      //Tant que retenter n'est pas de type booléen
      retenter = window.prompt("Voulez vous retenter votre chance ? (Oui/Non): ");
      if (retenter.toLowerCase() == "oui") {
        retenter = true;
      } else if (retenter.toLowerCase() == "non") {
        retenter = false;
      } else {
        console.log("Choix invalide !");
      }
    }
  }
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
