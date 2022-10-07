export class NomCarte {
    // Création de nouvelles instances de la classe comme attributs statiques
    static Deux = new NomCarte("Deux", 2);
    static Trois = new NomCarte("Trois", 3);
    static Quatre = new NomCarte("Quatre", 4);
    static Cinq = new NomCarte("Cinq", 5);
    static Six = new NomCarte("Six", 6);
    static Sept = new NomCarte("Sept", 7);
    static Huit = new NomCarte("Huit", 8);
    static Neuf = new NomCarte("Neuf", 9);
    static Dix = new NomCarte("Dix", 10);
    static Valet = new NomCarte("Valet", 11);
    static Dame = new NomCarte("Dame", 12);
    static Roi = new NomCarte("Roi", 13);
    static As = new NomCarte("As", 14);


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get points() {
        return this._points;
    }

    set points(value) {
        this._points = value;
    }

    constructor(name, points) {
        this._name = name;
        this._points = points;
    }

    static getNomCarteFromString(unNomCarte) {
        for (const nomCarte of Object.values(NomCarte)) {
            if (nomCarte.name == unNomCarte)
                return nomCarte
        }
            return null
    }
    toString = function() {
        return 'la carte est: '+this.name + ' et sa valeur est: '+this.points;
    }
}