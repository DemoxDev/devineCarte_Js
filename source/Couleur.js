export class Couleur {
	// Création de nouvelles instances de la classe comme attributs statiques
	static Trefle = new Couleur("Trefle");
	static Carreau = new Couleur("Carreau");
	static Coeur = new Couleur("Coeur");
	static Pique = new Couleur("Pique");

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
