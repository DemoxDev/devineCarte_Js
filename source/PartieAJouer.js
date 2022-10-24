import { Carte } from "./Carte.js";
import { NomCarte } from "./NomCarte.js";
import { Couleur } from "./Couleur.js";
import { Jeu } from "./Jeu.js";
import { Paquet } from "./Paquet.js";
import promptSync from "prompt-sync";




var aide = false;
const prompt = promptSync();
// Choix de quel jeu de carte (32 ou 52)
var nb_cartes = Number(prompt('Saisissez le nombre de cartes pour le jeu (32 ou 52 uniquement) : '))
while (nb_cartes !== 32 && nb_cartes !== 52) // Si nb_carte n'est pas 32 ou 52
    nb_cartes = Number(prompt('Mauvaise saisie. Saisissez le nombre de cartes pour le jeu (32 ou 52 uniquement) : ')) // Contrôle de saisie
if(nb_cartes === 32) console.log("Création d'un paquet de 32 cartes");
else console.log("Création d'un paquet de 52 cartes");

// const paquetDecartes = Paquet.createJeu32Cartes() ;
const paquetDeCartes = new Paquet(nb_cartes);

console.log(" ==== Instanciation du jeu, début de la partie. ====");
const jeu = new Jeu(
	aide,
	paquetDeCartes
	/*, new Carte(NomCarte.Sept,Couleur.Trefle)*/
);
console.log(paquetDeCartes.taille())


var retenter = true
var essais = 0 // Nombre d'essais auto-augmenté à chaque itération du while prochain
while (retenter === true)
{
	essais += 1
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
        const carteJoueur = new Carte(nomCarte,couleurCarte) ;

        if (jeu.isMatch(carteJoueur)) {
            console.log("Bravo, vous avez trouvé la bonne carte en "+essais+" essais !")
            break
        } else {

            console.log("Ce n'est pas bon")
            console.log("Vous avez proposé" + carteJoueur.toString())
            aide = prompt('Saisir true si vous voulez de l\'aide\ ou false si non : ');


            if (aide) {
                if (carteJoueur.compareTo(jeu.carteADeviner) === 1)
                    console.log("La carte à déviner est plus petite et a la même couleur")
                else if (carteJoueur.compareTo(jeu.carteADeviner) === 2)
                    console.log("La carte à déviner est plus petite et a une couleur différente")
                else if (carteJoueur.compareTo(jeu.carteADeviner) === 3)
                    console.log("La carte a déviner est le même nombre mais couleur différente.")
                else if (carteJoueur.compareTo(jeu.carteADeviner) === -2)
                    console.log("La carte à déviner est plus grande et a la même couleur")
                else if (carteJoueur.compareTo(jeu.carteADeviner) === -1)
                    console.log("La carte à déviner est plus grande et a une couleur différente")
                // FAIT TODO: (A) si l'aide est activée, alors dire si la carte proposée est
                //  plus petite ou plus grande que la carte à deviner
            }
        }
    }
    else
    {
        console.log("Désolé, mauvaise définition de carte !"+ nomCarte + couleurCarte)

    }

	var retenter = Boolean(prompt('Saisissez True pour retenter ou False pour abandoner la partie : '));
    while (retenter !== true && retenter !== false) {
        var retenter = Number(prompt('Mauvaise saisie. Saisissez True pour retenter ou False pour abandoner la partie : '));
    }
}

// TODO (A) permettre au joueur de retenter une autre carte (sans relancer le jeu) ou d'abandonner la partie
console.log("==== Fin prématurée de la partie ====");

console.log("Voici la carte qu'il fallait deviner:");
console.log(jeu.carteADeviner.toString());

// TODO (challenge-4) la stratégie de jeu est à implémenter... à faire lorsque les autres TODOs auront été réalisés
console.log("Votre stratégie de jeu :" + jeu.strategiePartie());

console.log(" ==== Fin de la partie. ====");
