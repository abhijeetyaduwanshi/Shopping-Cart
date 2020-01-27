import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Cat } from './cat';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    endpoint: string = 'http://localhost:8080/api';
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) { }

    GetCats() {
        return this.http.get(`${this.endpoint}`);
    }
}
