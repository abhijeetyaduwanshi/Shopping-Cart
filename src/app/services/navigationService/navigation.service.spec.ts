import { HttpErrorResponse } from '@angular/common/http';

import { asyncData, asyncError } from 'src/async-observable-helpers';
import { getTestNavigation } from './testing/test-navigation';
import { NavigationService } from './navigation.service';

describe('NavigationService (with spies)', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let service: NavigationService;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = new NavigationService(httpClientSpy as any);
    });

    it('should return expected navigation (HttpClient called once)', () => {
        const expectedNavigation = getTestNavigation();

        httpClientSpy.get.and.returnValue(asyncData(expectedNavigation));

        service.getNavigation().subscribe(
            navigation => expect(navigation).toEqual(expectedNavigation, 'expected navigation'),
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

        service.getNavigation().subscribe(
            navigation => fail('expected an error, not navigation'),
            error  => expect(error.message).toContain('test 404 error')
        );
    });
});
