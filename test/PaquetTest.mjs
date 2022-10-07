import {Carte} from '../source/Carte.js';
import assert from 'assert';
import {NomCarte} from "../source/NomCarte.js";
import {Couleur} from "../source/Couleur.js";
import {Paquet} from "../source/Paquet.js";

describe('Paquet', function(){

    describe('taille', function(){
        it('la taille lorsque construit sous forme de liste', function(){
            const paquetCartes = new Paquet(new Array(new Carte(NomCarte.Valet, Couleur.Coeur), new Carte(NomCarte.Dame, Couleur.Pique))) ;
            assert.strictEqual(2, paquetCartes.taille());
        });
        it('test création jeu de 32', function(){
            assert.strictEqual(1, 2);

        });
        it('test création jeu de 52', function(){
            assert.strictEqual(1, 2);

        });
    });
    describe('contenu', function(){
        const paquetCartes = new Paquet(new Array(new Carte(NomCarte.Valet, Couleur.Coeur), new Carte(NomCarte.Dame, Couleur.Pique))) ;

        it('le contenu littéraire est', function(){
            assert.equal("Paquet de 2 cartes", paquetCartes.toString());
        });
    });
});