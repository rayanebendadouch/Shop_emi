import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Produit } from '../../Models/produit';
import { NgIf, NgStyle } from '@angular/common';


@Component({
  selector: 'app-productitm',
  standalone: true,
  imports: [NgIf,NgStyle],
  templateUrl: './productitm.component.html',
  styleUrl: './productitm.component.css'
})
export class ProductitmComponent {
@Input() produit! : Produit
@Output() selectedProduct =new EventEmitter<Produit>
getState(s : number) : string{
  return s>0 ? "en stock" : "en rupture de stock"
}
getColor(s : number) : string{
  return s>0 ? "green" : "red"
}
addToCart(){
  this.selectedProduct.emit(this.produit)
}
}
