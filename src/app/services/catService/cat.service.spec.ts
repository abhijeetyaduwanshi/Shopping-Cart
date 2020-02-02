import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CatService } from './cat.service';

describe('CatService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [CatService]
    }));

    it('should be created', () => {
        const service: CatService = TestBed.get(CatService);
        expect(service).toBeTruthy();
    });

    it('should have getCats function', () => {
        const service: CatService = TestBed.get(CatService);
        expect(service.getCats).toBeTruthy();
    });

    it('getCats should return cat list', () => {
        const service: CatService = TestBed.get(CatService);
        const http = TestBed.get(HttpTestingController);

        const expectedCat = [{
            "_id": "abcd12345",
            "categoryTitle": "Some name",
            "categoryDescription": "Some Description.",
            "categoryId": "some-id",
            "categoryRoute": "some/route",
            "categoryImage": "images/some/image.png"
        }];
        let actualCat: any = [];

        service.getCats().subscribe(data => {
            actualCat = data;
        });

        http.expectOne('http://localhost:8080/api').flush(expectedCat);
        expect(actualCat).toEqual(expectedCat);
    });
});
