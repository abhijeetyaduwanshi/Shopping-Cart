import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CatService {
    endpoint: string = 'http://localhost:8080/api';
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) { }

    getCats() {
        return this.http.get(`${this.endpoint}`);
    }
}
