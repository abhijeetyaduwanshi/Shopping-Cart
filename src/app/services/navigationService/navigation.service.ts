import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NavigationService {

  corsAnywhere: string = 'https://cors-anywhere.herokuapp.com/';
  endpoint: string = 'http://abhijeet-shopping-cart-app-be.herokuapp.com/api/navigation';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  /**
   * GET navigation
   */
  getNavigation = () => {
    return this.http.get(`${this.corsAnywhere + this.endpoint}`);
  }
}
