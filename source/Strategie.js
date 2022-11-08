export class Strategie {
	static methode(jeu) {
		return null;
	}
	get jeu() {
		return this._jeu;
	}
	set jeu(value) {
		this._jeu = value;
	}
	/**
	 * Analyse la partie du joueur, a-t-il abandonné la partie,
	 *  a-t-il trouvé la carte en un nombre de fois "convenable" ou "inconvenable",
	 *  a-t-il eu de la chance ?
	 */
	constructor(jeu) {
		this._jeu = jeu;
	}

	toString = function () {
		return "Stratégie toString";
	};
}
