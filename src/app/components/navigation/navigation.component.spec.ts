import { TestBed, async } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { NavigationService } from './../../services/navigationService/navigation.service';
import { TestNavigationService } from './../../services/navigationService/testing/test-navigation.service';

describe('NavigationComponent', () => {
    let app: NavigationComponent;
    let service: TestNavigationService;

    beforeEach(async(() => {
        service = new TestNavigationService();
        app = new NavigationComponent(service);

        TestBed.configureTestingModule({
            declarations: [NavigationComponent],
            providers: [
                {
                    provide: NavigationService
                }
            ]
        }).compileComponents();
    }));

    it('should create the app', () => {
        expect(app).toBeTruthy();
    });

    it('navigationData should be empty initially', () => {
        expect(app.navigationData.length).toBe(0);
    });

    it('navigationData should have navigation list populated after ngOnInit', (done: DoneFn) => {
        app.ngOnInit();
        service.lastResult.subscribe(() => {
            expect(app.navigationData.length).toBeGreaterThan(0);
            done();
        },
        done.fail)
    });
});
