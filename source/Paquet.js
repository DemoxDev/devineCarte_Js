import { NomCarte } from "./NomCarte.js";
import { Couleur } from "./Couleur.js";
import { Carte } from "./Carte.js";

export class Paquet {
	get cartes() {
		return this._cartes;
	}

	set cartes(value) {
		this._cartes = value;
	}

	taille() {
		return this._cartes.length;
	}
	carteAdeviner() {
		let hasard = Math.floor(Math.random() * this.taille());
		return this._cartes[hasard];
	}

	toString() {
		return "Paquet de " + this.taille() + " cartes";
	}

	constructor(cartes) {
		if (typeof cartes === "undefined" || cartes.length == 0)
			this._cartes = Paquet.createJeu32Cartes();
		else this._cartes = cartes;
	}

	static createJeu32Cartes() {
		let listeCartes = new Array(
			new Carte(NomCarte.Sept, Couleur.Coeur),
			new Carte(NomCarte.Sept, Couleur.Pique),
			new Carte(NomCarte.Sept, Couleur.Trefle),
			new Carte(NomCarte.Sept, Couleur.Carreau),
			new Carte(NomCarte.Huit, Couleur.Coeur),
			new Carte(NomCarte.Huit, Couleur.Pique),
			new Carte(NomCarte.Huit, Couleur.Trefle),
			new Carte(NomCarte.Huit, Couleur.Carreau),
			new Carte(NomCarte.Neuf, Couleur.Coeur),
			new Carte(NomCarte.Neuf, Couleur.Pique),
			new Carte(NomCarte.Neuf, Couleur.Trefle),
			new Carte(NomCarte.Neuf, Couleur.Carreau),
			new Carte(NomCarte.Dix, Couleur.Coeur),
			new Carte(NomCarte.Dix, Couleur.Pique),
			new Carte(NomCarte.Dix, Couleur.Trefle),
			new Carte(NomCarte.Dix, Couleur.Carreau),
			new Carte(NomCarte.Roi, Couleur.Coeur),
			new Carte(NomCarte.Roi, Couleur.Pique),
			new Carte(NomCarte.Roi, Couleur.Trefle),
			new Carte(NomCarte.Roi, Couleur.Carreau),
			new Carte(NomCarte.Valet, Couleur.Coeur),
			new Carte(NomCarte.Valet, Couleur.Pique),
			new Carte(NomCarte.Valet, Couleur.Trefle),
			new Carte(NomCarte.Valet, Couleur.Carreau),
			new Carte(NomCarte.Dame, Couleur.Coeur),
			new Carte(NomCarte.Dame, Couleur.Pique),
			new Carte(NomCarte.Dame, Couleur.Trefle),
			new Carte(NomCarte.Dame, Couleur.Carreau),
			new Carte(NomCarte.As, Couleur.Coeur),
			new Carte(NomCarte.As, Couleur.Pique),
			new Carte(NomCarte.As, Couleur.Trefle),
			new Carte(NomCarte.As, Couleur.Carreau)
		);
		return listeCartes;
	}

	static createJeu52Cartes() {
		let listeCartes = new Array(
			new Carte(NomCarte.Deux, Couleur.Coeur),
			new Carte(NomCarte.Deux, Couleur.Pique),
			new Carte(NomCarte.Deux, Couleur.Trefle),
			new Carte(NomCarte.Deux, Couleur.Carreau),
			new Carte(NomCarte.Trois, Couleur.Coeur),
			new Carte(NomCarte.Trois, Couleur.Pique),
			new Carte(NomCarte.Trois, Couleur.Trefle),
			new Carte(NomCarte.Trois, Couleur.Carreau),
			new Carte(NomCarte.Quatre, Couleur.Coeur),
			new Carte(NomCarte.Quatre, Couleur.Pique),
			new Carte(NomCarte.Quatre, Couleur.Trefle),
			new Carte(NomCarte.Quatre, Couleur.Carreau),
			new Carte(NomCarte.Cinq, Couleur.Coeur),
			new Carte(NomCarte.Cinq, Couleur.Pique),
			new Carte(NomCarte.Cinq, Couleur.Trefle),
			new Carte(NomCarte.Cinq, Couleur.Carreau),
			new Carte(NomCarte.Six, Couleur.Coeur),
			new Carte(NomCarte.Six, Couleur.Pique),
			new Carte(NomCarte.Six, Couleur.Trefle),
			new Carte(NomCarte.Six, Couleur.Carreau),
			new Carte(NomCarte.Sept, Couleur.Coeur),
			new Carte(NomCarte.Sept, Couleur.Pique),
			new Carte(NomCarte.Sept, Couleur.Trefle),
			new Carte(NomCarte.Sept, Couleur.Carreau),
			new Carte(NomCarte.Huit, Couleur.Coeur),
			new Carte(NomCarte.Huit, Couleur.Pique),
			new Carte(NomCarte.Huit, Couleur.Trefle),
			new Carte(NomCarte.Huit, Couleur.Carreau),
			new Carte(NomCarte.Neuf, Couleur.Coeur),
			new Carte(NomCarte.Neuf, Couleur.Pique),
			new Carte(NomCarte.Neuf, Couleur.Trefle),
			new Carte(NomCarte.Neuf, Couleur.Carreau),
			new Carte(NomCarte.Dix, Couleur.Coeur),
			new Carte(NomCarte.Dix, Couleur.Pique),
			new Carte(NomCarte.Dix, Couleur.Trefle),
			new Carte(NomCarte.Dix, Couleur.Carreau),
			new Carte(NomCarte.Roi, Couleur.Coeur),
			new Carte(NomCarte.Roi, Couleur.Pique),
			new Carte(NomCarte.Roi, Couleur.Trefle),
			new Carte(NomCarte.Roi, Couleur.Carreau),
			new Carte(NomCarte.Valet, Couleur.Coeur),
			new Carte(NomCarte.Valet, Couleur.Pique),
			new Carte(NomCarte.Valet, Couleur.Trefle),
			new Carte(NomCarte.Valet, Couleur.Carreau),
			new Carte(NomCarte.Dame, Couleur.Coeur),
			new Carte(NomCarte.Dame, Couleur.Pique),
			new Carte(NomCarte.Dame, Couleur.Trefle),
			new Carte(NomCarte.Dame, Couleur.Carreau),
			new Carte(NomCarte.As, Couleur.Coeur),
			new Carte(NomCarte.As, Couleur.Pique),
			new Carte(NomCarte.As, Couleur.Trefle),
			new Carte(NomCarte.As, Couleur.Carreau)
		);
		return listeCartes;
	}

	rebattement(listeCartes) {
		return listeCartes.sort(() => 0.5 - Math.random());
	}
}
