import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Breads } from './breads';

@Injectable({
    providedIn: 'root'
})

export class BreadsService {
    endpoint: string = 'http://localhost:8080/api/breads';
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) { }

    getBreads() {
        return this.http.get(`${this.endpoint}`);
    }
}
