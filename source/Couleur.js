export class Couleur {
	// Création de nouvelles instances de la classe comme attributs statiques
	static Trefle = new Couleur("Trefle"); //4 point ?
	static Carreau = new Couleur("Carreau"); // 3 points ?
	static Coeur = new Couleur("Coeur"); // 2 points ?
	static Pique = new Couleur("Pique"); // 1 points ?

	constructor(name) {
		this.name = name;
	}

	static getCouleurCarteFromString(unNomDeCouleur) {
		// les valeurs de CouleurCarte sont des instances de CouleurCarte
		// couleurCarte est une variable de boucle ici, algorithme classique
		for (const couleurCarte of Object.values(Couleur)) {
			if (couleurCarte.name.toLowerCase() == unNomDeCouleur.toLowerCase())
				return couleurCarte;
		}
		return null;
	}

	toString = function () {
		return this.name;
	};
}
