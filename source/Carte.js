import {NomCarte} from './NomCarte.js' ;
import {Couleur} from './Couleur.js' ;

export class Carte {

    /**
     * La valeur d'une carte est déterminée par son nombre de points (qui dépend des points associés à son nom dans la déclaration du
     * type énuméré NomCarte @see [org.sio.slam.enum.NomCarte])
     */

    constructor(nomCarte, couleur ) {
        this._nomCarte = nomCarte;
        this._couleur = couleur;
    }
    get nomCarte() {
        return this._nomCarte;
    }
    set nomCarte(value) {
        this._nomCarte = value;
    }
    get couleur() {
        return this._couleur;
    }
    set couleur(value) {
        this._couleur = value;
    }

/**
 * Les cartes se comparent en fonction de leur valeur ET de leur couleur
 * Si this et uneCarte ont même valeur et même couleur, alors nous avons à faire à 2 mêmes cartes
 * ***/

    compareTo(uneCarte){
        if (this._nomCarte.points > uneCarte._nomCarte.points)
            return 1 ;
        else if (this._nomCarte.points === uneCarte._nomCarte.points)
            return 0 ;
        else return -1 ;
    }
    equals(uneCarte) {
        return this._nomCarte._points == uneCarte._nomCarte._points && this._couleur.name == uneCarte._couleur.name ;
    }

}


