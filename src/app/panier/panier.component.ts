import { Component, Input } from '@angular/core';
import { Lignepanier } from '../../Models/lignepanier';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
@Input() detailPanier : Lignepanier[]=[]
getTotale(): any{
let tot=0;
let i=0;
for(i;i<this.detailPanier.length;i++){
tot+=this.detailPanier[i].qte*this.detailPanier[i].produit.prix;
}
return tot;
}
}