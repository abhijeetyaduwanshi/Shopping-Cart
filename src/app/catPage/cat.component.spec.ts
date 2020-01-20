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

    it(`should have as pageName 'Cat page'`, () => {
        const fixture = TestBed.createComponent(CatComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.pageName).toEqual('Cat page');
    });

    it('should render page heading', () => {
        const fixture = TestBed.createComponent(CatComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('This is the Cat page.');
    });
});
