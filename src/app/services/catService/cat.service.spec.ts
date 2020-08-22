import { asyncData } from 'src/async-observable-helpers';
import { CatService } from './cat.service';
import { getTestCats } from './testing/test-cats'

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
});
