import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  getallcategory(){
    return this.http.get("https://dummyjson.com/products/categories");
  }
  getproductbycategory(keyword:string){
return this.http.get("https://dummyjson.com/products/category/"+keyword);
  }
}
