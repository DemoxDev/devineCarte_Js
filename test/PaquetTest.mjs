import { Carte } from "../source/Carte.js";
import assert from "assert";
import { NomCarte } from "../source/NomCarte.js";
import { Couleur } from "../source/Couleur.js";
import { Paquet } from "../source/Paquet.js";

describe("Paquet", function () {
	describe("taille", function () {
		it("la taille lorsque construit sous forme de liste", function () {
			const paquetCartes = new Paquet(
				new Array(
					new Carte(NomCarte.Valet, Couleur.Coeur),
					new Carte(NomCarte.Dame, Couleur.Pique)
				)
			);
			assert.strictEqual(2, paquetCartes.taille());
		});
		it("test création jeu de 32", function () {
			const paquetCartes = new Paquet(Paquet.createJeu32Cartes());
			assert.strictEqual(32, paquetCartes.taille());
		});
		it("test création jeu de 52", function () {
			const paquetCartes = new Paquet(Paquet.createJeu52Cartes());
			assert.strictEqual(52, paquetCartes.taille());
		});
	});
	describe("contenu", function () {
		const paquetCartes = new Paquet(
			new Array(
				new Carte(NomCarte.Valet, Couleur.Coeur),
				new Carte(NomCarte.Dame, Couleur.Pique)
			)
		);

		it("le contenu littéraire est", function () {
			assert.equal("Paquet de 2 cartes", paquetCartes.toString());
		});
	});
	// describe("rebattement", function () {
	// 	it("test de rebattre les cartes", function() {
	// 		const paquetCartes1 = new Paquet(Paquet.createJeu32Cartes());
	// 		console.log(paquetCartes1.toString())
	// 		assert.deepEqual(paquetCartes1, paquetCartes1.rebattement())
	// 	})
	// })
});
