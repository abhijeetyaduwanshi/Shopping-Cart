import { HttpErrorResponse } from '@angular/common/http';

import { asyncData, asyncError } from 'src/async-observable-helpers';
import { CatService } from './cat.service';
import { getTestCats } from './testing/test-cats';

describe('CatService (with spies)', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let service: CatService;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = new CatService(httpClientSpy as any);
    });

    it('should return expected cats (HttpClient called once)', () => {
        const expectedCat = getTestCats();

        httpClientSpy.get.and.returnValue(asyncData(expectedCat));

        service.getCats().subscribe(
            cats => expect(cats).toEqual(expectedCat, 'expected cats'),
            fail
        );
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('should return an error when the server returns a 404', () => {
        const errorResponse = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found'
        });

        httpClientSpy.get.and.returnValue(asyncError(errorResponse));

        service.getCats().subscribe(
            cats => fail('expected an error, not cats'),
            error  => expect(error.message).toContain('test 404 error')
        );
    });
});
