import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    endpoint = 'http://localhost:8080/api';
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    cartCount = new Subject();

    // product service constructor
    constructor(private http: HttpClient) { }

    /**
     * passes the products data for a category
     * 
     * @param  {catName} category name
     */
    public getProducts(catName) {
        let api = `${this.endpoint}/get-products/${catName}`;
        return this.http.get(api);
    }

    /**
     * passes the product data for a category based on the product id
     * 
     * @param  {id} product id
     * @param  {catName} category name
     */
    public getProduct(id, catName) {
        let api = `${this.endpoint}/get-product/${id}/${catName}`;
        return this.http.get(api, { headers: this.headers })
            .pipe(map((res: Response) => {
                return res || {}
            }),
        catchError(this.errors)
        )
    }

    /**
     * error handling for the service
     * 
     * @param  {HttpErrorResponse} error response
     */
    private errors(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // get client-side error
            errorMessage = error.error.message;
        } else {
            // get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }

    public editCartCount(count) {
        this.cartCount.next(count);
    }

    public getAddedCartCount(): Observable<any> {
        return this.cartCount.asObservable();
    }
}
