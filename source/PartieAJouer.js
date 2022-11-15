import { Carte } from "./Carte.js";
import { NomCarte } from "./NomCarte.js";
import { Couleur } from "./Couleur.js";
import { Jeu } from "./Jeu.js";
import { Paquet } from "./Paquet.js";
import promptSync from "prompt-sync";

const prompt = promptSync();
// Choix de quel jeu de carte (32 ou 52)
var nb_cartes = Number(
	prompt("Saisissez le nombre de cartes pour le jeu (32/52): ")
);
while (nb_cartes !== 32 && nb_cartes !== 52) {
	console.log("Choix invalide !");
	nb_cartes = Number(
		prompt("Saisissez le nombre de cartes pour le jeu (32/52): ")
	);
}
if (nb_cartes == 32) {
	console.log("Création d'un paquet de 32 cartes");
	var paquetDeCartes = new Paquet(Paquet.createJeu32Cartes());
} else {
	console.log("Création d'un paquet de 52 cartes");
	var paquetDeCartes = new Paquet(Paquet.createJeu52Cartes());
}


let aide = "";
// Donner au joueur le choix de reçevoir de l'aide à chaque essai
while (aide !== true && aide !== false) {
	//Tant que aide n'est pas de type booléen
	aide = prompt(
		"Voulez vous reçevoir des indices lors de votre partie ? (Oui/Non): "
	);
	if (aide.toLowerCase() == "oui") {
		aide = true;
	} else if (aide.toLowerCase() == "non") {
		aide = false;
	} else {
		console.log("Choix invalide !");
	}
}

console.log(" ==== Instanciation du jeu, début de la partie. ====");
const jeu = new Jeu(
	aide,
	paquetDeCartes
	//,new Carte(NomCarte.Sept, Couleur.Trefle) //Forcer la carte à deviner
);

var retenter = true;
jeu.essaisTab.push([]);
jeu.essaisTab[0][0] = 0; // Nb d'essais, incrémenté à chaque fois que retenter est vrai
jeu.essaisTab[0][1] = jeu.avecAide; // Stocker une valeur booléenne indiquant si le joueur utilise de l'aide ou pas
jeu.essaisTab[0][2] = null; // Stocker une valeur nulle pour remplir les cases vides
while (retenter == true) {
	retenter = ""; //On donne un type autre que booléen pour permettre le choix plus bas
	jeu.essaisTab[0][0]++;
	console.log("Essai n°" + jeu.essaisTab[0][0]);
	//Saisie du nom de la carte
	let nomSaisi = prompt(
		"Entrez un nom de carte dans le jeu (exemples : Roi, sept, six, As...) : "
	);
	let nomCarte = NomCarte.getNomCarteFromString(nomSaisi);
	while (nomCarte === null) {
		nomSaisi = prompt(
		"Cette carte n'existe pas. Entrez un nom de carte dans le jeu (exemples : Roi, sept, six, As...) : "
		);
		nomCarte = NomCarte.getNomCarteFromString(nomSaisi);
	}
	console.log("Carte choisie: " + nomCarte);

	//Saisie de la couleur de la carte
	let couleurCarte = Couleur.getCouleurCarteFromString(
		prompt(
			'Entrez un nom de "couleur" de carte parmi : Pique, Trefle, Coeur, Carreau : '
		)
	);
	while (couleurCarte === null) {
		couleurCarte = Couleur.getCouleurCarteFromString(
		prompt(
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
				console.log(helpMsg);
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
		retenter = prompt("Voulez vous retenter votre chance ? (Oui/Non): ");
		if (retenter.toLowerCase() == "oui") {
			retenter = true;
		} else if (retenter.toLowerCase() == "non") {
			retenter = false;
		} else {
			console.log("Choix invalide !");
		}
	}
}

console.log(" ==== Fin de la partie. ====");

console.log("Voici la carte qu'il fallait deviner: ");
console.log(jeu.carteADeviner.toString());

// TODO (challenge-4) la stratégie de jeu est à implémenter... à faire lorsque les autres TODOs auront été réalisés
console.log("Votre stratégie de jeu: \n" + jeu.strategiePartie());
