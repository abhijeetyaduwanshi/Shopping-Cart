import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  corsAnywhere: string = 'https://cors-anywhere.herokuapp.com/';
  endpoint: string = 'http://abhijeet-shopping-cart-app-be.herokuapp.com/api/categories';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  /**
   * GET all categories
   */
  getCategories = () => {
    return this.http.get(`${this.corsAnywhere + this.endpoint}`);
  }
}
