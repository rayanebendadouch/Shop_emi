import { Component, OnInit } from '@angular/core';
import { Produit } from '../../Models/produit';
import { ProductitmComponent } from '../productitm/productitm.component';
import { Lignepanier } from '../../Models/lignepanier';
import { PanierComponent } from '../panier/panier.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Productapi } from '../../Models/productapi';

@Component({
  selector: 'app-listproduct',
  standalone: true,
  imports: [ProductitmComponent,PanierComponent,FormsModule],
  templateUrl: './listproduct.component.html',
  styleUrl: './listproduct.component.css'
})
export class ListproductComponent implements OnInit{
  produits: Produit[] = [];
  productApi:Productapi[]=[];
detailProduit:Lignepanier[]=[]
displayPanier : boolean=false
nameProduct:string="";
addOnPanier(p:Produit){
  let i:number=0
  let j:number=0
  for(i;i<this.detailProduit.length;i++){
if(this.detailProduit[i].produit.id==p.id) {
  this.detailProduit[i].qte++;
  j=1
  }
}
if(j==0){
  const lp =new Lignepanier(p,1)
  this.detailProduit.push(lp)
}
p.stock--;
}
ShowPanier(){
this.displayPanier=true
}
ShowHome(){
  this.displayPanier=false
}
constructor(private prodserve : ProductService){}
ngOnInit(): void {
this.prodserve.getallproduct().subscribe((data:any)=>{
  this.productApi=data.products
  this.productApi.forEach(p=>{
    const prod=new Produit(p.id,p.title,p.images[0],p.price,p.category,p.description,p.stock)
    this.produits.push(prod);
  })
})
}
search(){
  if(this.nameProduct==''){
    this.ngOnInit();
  }
  
  this.produits=this.produits.filter(obj=>{
    return obj.nom.toLowerCase().match(this.nameProduct.toLowerCase())
  })
}
}

