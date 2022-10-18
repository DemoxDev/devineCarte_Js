import { Carte } from "./Carte.js";
import { NomCarte } from "./NomCarte.js";
import { Couleur } from "./Couleur.js";
import { Jeu } from "./Jeu.js";
import { Paquet } from "./Paquet.js";
import promptSync from "prompt-sync";

const aide = false;
console.log("Création d'un paquet de 32 cartes");
// const paquetDecartes = Paquet.createJeu32Cartes() ;
const paquetDecartes = new Paquet();

console.log(" ==== Instanciation du jeu, début de la partie. ====");
const jeu = new Jeu(
	aide,
	paquetDeCartes /*, new Carte(NomCarte.Sept,Couleur.Trefle)*/
);

const prompt = promptSync();
const nomSaisi = prompt(
	"Entrez un nom de carte dans le jeu (exemples : Roi, sept, six, As...) : "
);
const nomCarte = NomCarte.getNomCarteFromString(nomSaisi);
console.log(nomCarte);

const couleurSaisie = prompt(
	'Entrez un nom de "couleur" de carte parmi : Pique, Trefle, Coeur, Carreau : '
);
const couleurCarte = Couleur.getCouleurCarteFromString(couleurSaisie);
console.log(couleurCarte);

if (nomCarte != null && couleurCarte != null) {
	// prise en compte de la carte du joueur
	const carteJoueur = new Carte(nomCarte, couleurCarte);

	if (jeu.isMatch(carteJoueur)) {
		console.log("Bravo, vous avez trouvé la bonne carte !");
	} else {
		console.log("Vous n'avez pas trouvé la carte à deviner !");
		console.log("Carte proposée: " + carteJoueur.toString());

		if (aide) {
			// TODO: (A) si l'aide est activée, alors dire si la carte proposée est
			//  plus petite ou plus grande que la carte à deviner
		}
	}
} else {
	console.log(
		"Désolé, mauvaise définition de carte: " + nomCarte + " " + couleurCarte
	);
}

// TODO (A) permettre au joueur de retenter une autre carte (sans relancer le jeu) ou d'abandonner la partie
console.log("==== Fin prématurée de la partie ====");

console.log("Voici la carte qu'il fallait deviner:");
console.log(jeu.carteADeviner.toString());

// TODO (challenge-4) la stratégie de jeu est à implémenter... à faire lorsque les autres TODOs auront été réalisés
console.log("Votre stratégie de jeu :" + jeu.strategiePartie());

console.log(" ==== Fin de la partie. ====");
