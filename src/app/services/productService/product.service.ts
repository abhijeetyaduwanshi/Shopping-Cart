import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Product } from './product';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    endpoint: string = 'http://localhost:8080/api';
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) { }

    getProduct(catName) {
        let api = `${this.endpoint}/get-products/${catName}`;
        return this.http.get(api);
    }
}
