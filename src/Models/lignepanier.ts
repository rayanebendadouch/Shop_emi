import { Produit } from "./produit";

export class Lignepanier {
    produit: Produit
    qte : number
    constructor(produit: Produit,qte : number){
        this.produit=produit
        this.qte=qte
    }
}
