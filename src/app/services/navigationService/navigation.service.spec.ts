import { asyncData } from 'src/async-observable-helpers';
import { NavigationService } from './navigation.service';
import { getTestNavigation } from './testing/test-navigation';

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
});
