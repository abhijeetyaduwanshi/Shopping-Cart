import { HttpClientTestingModule } from '@angular/common/http/testing';
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
});
