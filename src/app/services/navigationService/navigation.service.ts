import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class NavigationService {
    readonly endpoint: string = 'http://localhost:8080/api/navigation';

    constructor(private http: HttpClient) { }

    /**
     * GET navigation from the server
     */
    getNavigation() {
        return this.http.get(`${this.endpoint}`);
    }
}
