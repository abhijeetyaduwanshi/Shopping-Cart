import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [NavigationService]
    }));

    it('should be created', () => {
        const service: NavigationService = TestBed.get(NavigationService);
        expect(service).toBeTruthy();
    });

    it('should have getNavigation function', () => {
        const service: NavigationService = TestBed.get(NavigationService);
        expect(service.getNavigation).toBeTruthy();
    });

    it('getNavigation should return navigation list', () => {
        const service: NavigationService = TestBed.get(NavigationService);
        const http = TestBed.get(HttpTestingController);

        const expectedNavigation = [{
            "_id": "abcd12345",
            "categoryTitle": "Some name",
            "categoryRoute": "some/route"
        }];
        let actualNavigation: any = [];

        service.getNavigation().subscribe(data => {
            actualNavigation = data;
        });

        http.expectOne('http://localhost:8080/api/navigation').flush(expectedNavigation);
        expect(actualNavigation).toEqual(expectedNavigation);
    });
});
