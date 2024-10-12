import { Component, OnInit } from '@angular/core';
import { Produit } from '../../Models/produit';
import { ProductitmComponent } from '../productitm/productitm.component';
import { Lignepanier } from '../../Models/lignepanier';
import { ProductserviceService } from '../productservice.service';
import { PanierComponent } from '../panier/panier.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listproduct',
  standalone: true,
  imports: [ProductitmComponent,PanierComponent,FormsModule],
  templateUrl: './listproduct.component.html',
  styleUrl: './listproduct.component.css'
})
export class ListproductComponent implements OnInit{
  produits: Produit[] = [
    new Produit(1 ,'iPhone 15', 'https://mediazone.ma/uploads/images/products/14643/14643-MeYP7wKI.webp', 15000, 'Electronics', 'A great electronic product' , 56),
    new Produit(2,'Asus', 'https://mediazone.ma/uploads/images/products/15055/15055-KG1ZWYSi.webp', 19.99, 'Books', 'An interesting book to read' , 5),
    new Produit(3,'Samsung Galaxy S22', 'https://images.samsung.com/is/image/samsung/p6pim/nz/sm-s901elvdxnz/gallery/nz-galaxy-s22-s901-410111-sm-s901elvdxnz-thumb-533033616', 6999.99, 'Electronics', 'Latest Samsung flagship smartphone',0),
    new Produit(4,'Sony PlayStation 5', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKa1HAGWrDwUKbAlNKwe3L2j0Cu3e0QQ_nbg&s', 3999.99, 'Gaming', 'Next-gen gaming console by Sony',55),
    new Produit(5,'MacBook Pro', 'https://images-cdn.ubuy.ae/633aa5377c62ab34c07fe77b-apple-macbook-pro-with-apple-m2-chip.jpg', 4299.99, 'Computers', 'High-performance laptop from Apple',1),
    new Produit(6,'Kindle Paperwhite', 'https://media.wired.com/photos/618076ef6fe08d62522d94c7/3:2/w_2400,h_1600,c_limit/Gear-Kindle-Paperwhite-top.jpg', 129.99, 'Books', 'Amazon’s most popular e-reader', 20),
    new Produit(7,'Mac book', 'https://technoplace.ma/21804-large_default/apple-macbook-pro-13-m2-laptop.jpg', 3999.99, 'Computers', 'High-performance laptop from Apple' , 30),
    new Produit(8 ,'Bose QuietComfort 45', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdaGsGo_Fwz_7zCvkZSNAgDV5TCtBu8hLNA&s', 299.99, 'Electronics', 'Noise-canceling headphones by Bose',40)
];
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
constructor(private prodserve : ProductserviceService){}
ngOnInit(): void {
  this.produits= [
    new Produit(1 ,'iPhone 15', 'https://mediazone.ma/uploads/images/products/14643/14643-MeYP7wKI.webp', 15000, 'Electronics', 'A great electronic product' , 56),
    new Produit(2,'Asus', 'https://mediazone.ma/uploads/images/products/15055/15055-KG1ZWYSi.webp', 19.99, 'Books', 'An interesting book to read' , 5),
    new Produit(3,'Samsung Galaxy S22', 'https://images.samsung.com/is/image/samsung/p6pim/nz/sm-s901elvdxnz/gallery/nz-galaxy-s22-s901-410111-sm-s901elvdxnz-thumb-533033616', 6999.99, 'Electronics', 'Latest Samsung flagship smartphone',0),
    new Produit(4,'Sony PlayStation 5', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKa1HAGWrDwUKbAlNKwe3L2j0Cu3e0QQ_nbg&s', 3999.99, 'Gaming', 'Next-gen gaming console by Sony',55),
    new Produit(5,'MacBook Pro', 'https://images-cdn.ubuy.ae/633aa5377c62ab34c07fe77b-apple-macbook-pro-with-apple-m2-chip.jpg', 4299.99, 'Computers', 'High-performance laptop from Apple',1),
    new Produit(6,'Kindle Paperwhite', 'https://media.wired.com/photos/618076ef6fe08d62522d94c7/3:2/w_2400,h_1600,c_limit/Gear-Kindle-Paperwhite-top.jpg', 129.99, 'Books', 'Amazon’s most popular e-reader', 20),
    new Produit(7,'Mac book', 'https://technoplace.ma/21804-large_default/apple-macbook-pro-13-m2-laptop.jpg', 3999.99, 'Computers', 'High-performance laptop from Apple' , 30),
    new Produit(8 ,'Bose QuietComfort 45', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFdaGsGo_Fwz_7zCvkZSNAgDV5TCtBu8hLNA&s', 299.99, 'Electronics', 'Noise-canceling headphones by Bose',40)
];
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
