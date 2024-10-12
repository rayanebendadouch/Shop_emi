import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http : HttpClient ) {}
  getProduct(){
    return this.http.get("https://dummyjson.com/products" )
  }
}
