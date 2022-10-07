
import {Carte} from '../source/Carte.js';
import assert from 'assert';
import {NomCarte} from "../source/NomCarte.js";
import {Couleur} from "../source/Couleur.js";

describe('Carte', function(){
    describe('nom', function(){
        it('le nom de carte', function(){
            let valetCoeur = new Carte(NomCarte.Valet, Couleur.Coeur) ;

            assert.strictEqual(valetCoeur.nomCarte, NomCarte.Valet);
            assert.notStrictEqual(valetCoeur.nomCarte,"Valet") ;
        });
    });
    describe('couleur', function(){
        it('la couleur de la carte', function(){
            let valetCoeur = new Carte(NomCarte.Valet, Couleur.Coeur) ;
            assert.strictEqual(valetCoeur.couleur, Couleur.Coeur);
            assert.notStrictEqual(valetCoeur.couleur,"Coeur") ;
        });
    });
});