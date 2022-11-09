import { Carte } from "../source/Carte.js";
import assert from "assert";
import { NomCarte } from "../source/NomCarte.js";
import { Couleur } from "../source/Couleur.js";
import { Paquet } from "../source/Paquet.js";
import { Jeu } from "../source/Jeu.js";

describe("Tests relatifs au jeu", function () {
	describe("Tests relatifs à l'aide", function () {
		it('L\'indice est "plus grand" si la carte proposée est trop petite', function () {
			const jeu = new Jeu(true, new Paquet(Paquet.createJeu32Cartes()), new Carte(NomCarte.getNomCarteFromString('Dix'), Couleur.getCouleurCarteFromString('Trefle')));
			//let carteJoueur = new Carte(NomCarte.getNomCarteFromString('Six'), Couleur.getCouleurCarteFromString('Pique'))
			const codeComparaison = new Carte(NomCarte.getNomCarteFromString('Six'), Couleur.getCouleurCarteFromString('Pique')).compareTo(jeu.carteADeviner)
			assert.strictEqual(codeComparaison, -1, "La carte à deviner n'est pas plus grande");
		});
		it('L\'indice est "plus petit" si la carte proposée est trop grande', function () {
			const jeu = new Jeu(true, new Paquet(Paquet.createJeu32Cartes()), new Carte(NomCarte.getNomCarteFromString('Deux'), Couleur.getCouleurCarteFromString('Trefle')));
			//let carteJoueur = new Carte(NomCarte.getNomCarteFromString('Six'), Couleur.getCouleurCarteFromString('Pique'))
			const codeComparaison = new Carte(NomCarte.getNomCarteFromString('Six'), Couleur.getCouleurCarteFromString('Pique')).compareTo(jeu.carteADeviner)
			assert.strictEqual(codeComparaison, 1, "La carte à deviner n'est pas plus petite");
		});
		it('L\'indice est pareil car la carte à deviner est la même que celle proposée', function () {
			const jeu = new Jeu(true, new Paquet(Paquet.createJeu32Cartes()), new Carte(NomCarte.getNomCarteFromString('Six'), Couleur.getCouleurCarteFromString('Trefle')));
			// let carteJoueur = new Carte(NomCarte.getNomCarteFromString('Six'), Couleur.getCouleurCarteFromString('Pique'))
			const codeComparaison = new Carte(NomCarte.getNomCarteFromString('Six'), Couleur.getCouleurCarteFromString('Pique')).compareTo(jeu.carteADeviner)
			assert.strictEqual(codeComparaison, 0, "La carte à deviner n'est pas égale à celle choisie");
		});
		it('La couleur de la carte à deviner est différente', function () {
			const jeu = new Jeu(true, new Paquet(Paquet.createJeu32Cartes()), new Carte(NomCarte.getNomCarteFromString('Deux'), Couleur.getCouleurCarteFromString('Trefle')));
			//let carteJoueur = new Carte(NomCarte.getNomCarteFromString('Six'), Couleur.getCouleurCarteFromString('Pique'))
			let memeCouleur;
			if (new Carte(NomCarte.getNomCarteFromString('Six'), Couleur.getCouleurCarteFromString('Pique')).couleur == jeu.carteADeviner.couleur) {
				memeCouleur = true;
			}
			else memeCouleur = false;
			assert.equal(memeCouleur, false, "La couleur des cartes n'est pas différente");
		});
		it('La couleur de la carte à deviner est la même', function () {
			const jeu = new Jeu(true, new Paquet(Paquet.createJeu32Cartes()), new Carte(NomCarte.getNomCarteFromString('Deux'), Couleur.getCouleurCarteFromString('Pique')));
			//let carteJoueur = new Carte(NomCarte.getNomCarteFromString('Six'), Couleur.getCouleurCarteFromString('Pique'))
			let memeCouleur;
			if (new Carte(NomCarte.getNomCarteFromString('Six'), Couleur.getCouleurCarteFromString('Pique')).couleur == jeu.carteADeviner.couleur) {
				memeCouleur = true;
			}
			else memeCouleur = false;
			assert.equal(memeCouleur, true, "La couleur des cartes n'est pas la même");
		});
	});
	describe("Tests relatifs à la carte à deviner", function () {
		it('La carte a été devinée', function () {
			const jeu = new Jeu(true, new Paquet(Paquet.createJeu32Cartes()), new Carte(NomCarte.getNomCarteFromString('Dix'), Couleur.getCouleurCarteFromString('Trefle')));
			//let carteJoueur = new Carte(NomCarte.getNomCarteFromString('Six'), Couleur.getCouleurCarteFromString('Pique'))
			let devinee;
			if (jeu.isMatch(new Carte(NomCarte.getNomCarteFromString('Dix'), Couleur.getCouleurCarteFromString('Trefle')))) {
				devinee = true;
			}
			else devinee = false;
			assert.strictEqual(devinee, true, "La carte à deviner n'est pas celle choisie");
		});
		it('La carte a n\'a pas été devinée', function () {
			const jeu = new Jeu(true, new Paquet(Paquet.createJeu32Cartes()), new Carte(NomCarte.getNomCarteFromString('Dix'), Couleur.getCouleurCarteFromString('Trefle')));
			//let carteJoueur = new Carte(NomCarte.getNomCarteFromString('Six'), Couleur.getCouleurCarteFromString('Pique'))
			let devinee;
			if (jeu.isMatch(new Carte(NomCarte.getNomCarteFromString('Six'), Couleur.getCouleurCarteFromString('Trefle')))) {
				devinee = true;
			}
			else devinee = false;
			assert.strictEqual(devinee, false, "La carte à deviner est celle choisie");
		});
	});
	describe("Tests relatifs aux essais", function () {
		it('Le nombre d\'essais est 2', function () {
			const jeu = new Jeu(true, new Paquet(Paquet.createJeu32Cartes()), new Carte(NomCarte.getNomCarteFromString('Dix'), Couleur.getCouleurCarteFromString('Trefle')));
			//let carteJoueur = new Carte(NomCarte.getNomCarteFromString('Six'), Couleur.getCouleurCarteFromString('Pique'))
			
			assert.strictEqual(jeu.essaisTab[0][0], 2, "La carte à deviner n'est pas celle choisie");
		});
		it('La carte a n\'a pas été devinée', function () {
			const jeu = new Jeu(true, new Paquet(Paquet.createJeu32Cartes()), new Carte(NomCarte.getNomCarteFromString('Dix'), Couleur.getCouleurCarteFromString('Trefle')));
			//let carteJoueur = new Carte(NomCarte.getNomCarteFromString('Six'), Couleur.getCouleurCarteFromString('Pique'))
			let devinee;
			if (jeu.isMatch(new Carte(NomCarte.getNomCarteFromString('Six'), Couleur.getCouleurCarteFromString('Trefle')))) {
				devinee = true;
			}
			else devinee = false;
			assert.strictEqual(devinee, false, "La carte à deviner est celle choisie");
		});
	});
});
