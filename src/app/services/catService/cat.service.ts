import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cat } from './cat';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class CatService {
    readonly endpoint: string = 'http://localhost:8080/api';

    constructor(private http: HttpClient) { }

    /**
     * GET cats from the server
     */
    getCats() {
        return this.http.get(`${this.endpoint}`)
        .pipe(
            catchError(this.handleError('getCats'))
        ) as Observable<Cat[]>;
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
}
