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
	constructor(jeu) {
		this._jeu = jeu;
	}

	/**
	 * Analyse la partie du joueur, a-t-il abandonné la partie,
	 *  a-t-il trouvé la carte en un nombre de fois "convenable" ou "inconvenable",
	 *  a-t-il eu de la chance ?
	 */
	toString = function () {
		let stratMsg =
			"Le joueur a fait " +
			this._jeu.essaisTab[0][0] +
			" essais au cours de cette partie\n";
		if (this._jeu.essaisTab[0][1] == true) {
			stratMsg += "Le joueur a utilisé de l'aide pour cette partie\n";
		} else {
			stratMsg += "Le joueur n'a pas utilisé l'aide pour cette partie\n";
		}
		let nb_essais = this._jeu.essaisTab.length;
		for (let i = 1; i < nb_essais; i++) {
			stratMsg += "Lors de l'essai " + i + ", ";
			stratMsg +=
				"le joueur a proposé la carte " +
				this._jeu.essaisTab[i][0].toString();
			if (
				this._jeu.essaisTab[0][1] == true &&
				this._jeu.essaisTab[i - 1][1] !== true &&
				this._jeu.essaisTab[i - 1][1] != null
			) {
				stratMsg += ' après avoir reçu comme indice "';
				switch (this._jeu.essaisTab[i - 1][1]) {
					case -1:
						stratMsg += "La carte à deviner est plus grande";
						break;
					case 0:
						stratMsg += "La carte à deviner a la même valeur";
						break;
					case 1:
						stratMsg += "La carte à deviner est plus petite";
						break;
				}
				switch (this._jeu.essaisTab[i - 1][2]) {
					case true:
						stratMsg += " et a la même couleur";
						break;
					case false:
						stratMsg += " et a une couleur différente";
						break;
				}
				stratMsg += '"';
			}
			if (i + 1 == nb_essais) {
				stratMsg += " et a terminé la partie.";
			}
			stratMsg += "\n";
		}
		return stratMsg;
	};
}
