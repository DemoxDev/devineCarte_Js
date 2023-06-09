import { Carte } from "./Carte.js";
import { Paquet } from "./Paquet.js";
import { Strategie } from "./Strategie.js";

export class Jeu {
	get avecAide() {
		return this._avecAide;
	}

	set avecAide(value) {
		this._avecAide = value;
	}

	get paquet() {
		return this._paquet;
	}

	set paquet(value) {
		this._paquet = value;
	}

	get carteADeviner() {
		return this._carteADeviner;
	}

	set carteADeviner(value) {
		this._carteADeviner = value;
	}

	get strategie() {
		return this._strategie;
	}

	set strategie(value) {
		this._strategie = value;
	}

	get essaisTab() {
		return this._essaisTab;
	}

	set essaisTab(value) {
		this._essaisTab = value;
	}

	constructor(avecAide, paquet, carte) {
		this._paquet = paquet;

		if (typeof carte === "undefined") {
			let hasard = Math.floor(Math.random() * this._paquet.taille());
			this._carteADeviner = this._paquet._cartes[hasard];
		} else this._carteADeviner = carte;
		this._avecAide = avecAide;
		this._strategie = new Strategie(this);
		this._essaisTab = [];
	}

	isMatch(carteProposee) {
		return this._carteADeviner.equals(carteProposee);
	}

	/**
	 * Analyse la partie du joueur, a-t-il abandonné la partie,
	 *  a-t-il trouvé la carte en un nombre de fois "convenable" ou "inconvenable",
	 *  a-t-il eu de la chance ?
	 */
	strategiePartie() {
		return this._strategie.toString();
	}
}
