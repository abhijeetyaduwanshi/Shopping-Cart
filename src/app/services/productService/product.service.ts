import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  corsAnywhere: string = 'https://cors-anywhere.herokuapp.com/';
  endpoint: string = 'http://abhijeet-shopping-cart-app-be.herokuapp.com/api/products/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  /**
   * GET all products
   * 
   * @param  {string} categoryTitle
   */
  getProducts = (categoryTitle: string) => {
    return this.http.get(`${this.corsAnywhere + this.endpoint + "/" + categoryTitle}`);
  }

  /**
   * GET single product
   * 
   * @param  {string} categoryTitle
   * @param  {string} id
   */
  getProduct = (categoryTitle: string, id: string) => {
    return this.http.get(`${this.corsAnywhere + this.endpoint + "/" + categoryTitle + "/" + id}`);
  }
}
