import { TestBed, async } from '@angular/core/testing';
import { CatComponent } from './cat.component';

describe('CatComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CatComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(CatComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
