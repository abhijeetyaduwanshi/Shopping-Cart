import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Product } from './product';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    readonly endpoint = 'http://localhost:8080/api';
    cartCount = new Subject();

    constructor(private http: HttpClient) { }

    /**
     * GET products from the server
     * 
     * @param  {catName} category name
     */
    getProducts(catName) {
        const api = `${this.endpoint}/get-products/${catName}`;
        return this.http.get(api)
        .pipe(
            catchError(this.handleError('getProducts'))
        ) as Observable<Product[]>;
    }

    /**
     * GET product by id for a category from the server, `undefined` when not found
     * 
     * @param  {id} product id
     * @param  {catName} category name
     */
    getProduct(id, catName) {
        const api = `${this.endpoint}/get-product/${id}/${catName}`;
        return this.http.get(api)
            .pipe(map(product => product || {}),
            catchError(this.handleError<Product>(`getProduct id=${id}`))
        );
    }

    /**
     * Returns a function that handles Http operation failures
     * This error handler lets the app continue to run as if no error occurred
     * 
     * @param  {operation='operation'} name of the operation that failed
     */
    private handleError<T>(operation = 'operation') {
        return (error: HttpErrorResponse): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            const message = (error.error instanceof ErrorEvent) ? error.error.message : `server returned code ${error.status} with body "${error.error}"`;

            // TODO: better job of transforming error for user consumption
            throw new Error(`${operation} failed: ${message}`);
        };
    }

    public editCartCount(count) {
        this.cartCount.next(count);
    }

    public getAddedCartCount(): Observable<any> {
        return this.cartCount.asObservable();
    }
}
