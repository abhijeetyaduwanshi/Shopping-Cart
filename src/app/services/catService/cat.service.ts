import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
        return this.http.get(`${this.endpoint}`);
    }
}
