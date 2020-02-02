import { TestBed, async } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { NavigationService } from './../../services/navigationService/navigation.service';

describe('NavigationComponent', () => {
    const url: String = "http://localhost:8080/api";

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NavigationComponent],
            providers: [
                {
                    provide: NavigationService,
                    useValue: url
                }
            ]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(NavigationComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
