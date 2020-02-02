import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Navigation } from './navigation';

@Injectable({
    providedIn: 'root'
})

export class NavigationService {
    endpoint: string = 'http://localhost:8080/api/navigation';
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) { }

    getNavigation() {
        return this.http.get(`${this.endpoint}`);
    }
}
