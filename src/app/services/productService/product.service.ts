import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  cartCount = new Subject();
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

  /**
   * Change the cart count
   * 
   * @param count
   */
  editCartCount(count) {
    this.cartCount.next(count);
  }

  /**
   * Get the current updated cart count
   * 
   * @returns cartCount
   */
  getCartCount(): Observable<any> {
    return this.cartCount.asObservable();
  }
}
