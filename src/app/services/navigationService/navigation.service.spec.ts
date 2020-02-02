import { HttpClientTestingModule } from '@angular/common/http/testing';
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
});
