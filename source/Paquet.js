import {NomCarte} from './NomCarte.js' ;
import {Couleur} from './Couleur.js' ;
import {Carte} from './Carte.js' ;

export class Paquet {

    get cartes() {
        return this._cartes;
    }

    set cartes(value) {
        this._cartes = value;
    }

    taille(){
        return this._cartes.length ;
    }
    carteAdeviner(){
        return this._cartes[0] ;
        //return new Carte(NomCarte.Sept,Couleur.Trefle) ;
    }

    toString() {
        return "Paquet de "+this.taille()+" cartes";
    }

    constructor(cartes) {

        if (typeof cartes === 'undefined' || cartes.length ==0 )
            this._cartes = Paquet.createJeu32Cartes() ;
        else
            this._cartes = cartes;
    }

    static createJeu32Cartes() {
        let listeCartes = new Array(
            new Carte(NomCarte.Deux, Couleur.Trefle),
            new Carte(NomCarte.Deux, Couleur.Carreau),
            new Carte(NomCarte.Deux, Couleur.Coeur),
            new Carte(NomCarte.Deux, Couleur.Pique)
        )        ;
        return listeCartes ;
    }



}
