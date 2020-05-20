import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Pizzas } from './pizzas';

@Injectable({
    providedIn: 'root'
})

export class PizzasService {
    endpoint: string = 'http://localhost:8080/api/pizzas';
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) { }

    getPizzas() {
        return this.http.get(`${this.endpoint}`);
    }
}
