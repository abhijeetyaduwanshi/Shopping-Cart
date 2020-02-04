import { TestBed, async } from '@angular/core/testing';

import { AngularMaterialModule } from './../../material.module';
import { CatComponent } from './cat.component';
import { CatService } from './../../services/catService/cat.service';
import { TestCatService } from './../../services/catService/testing/test-cat.service';

describe('CatComponent', () => {
    let app: CatComponent;
    let service: TestCatService;

    beforeEach(async(() => {
        service = new TestCatService();
        app = new CatComponent(service);

        TestBed.configureTestingModule({
            imports: [AngularMaterialModule],
            declarations: [CatComponent],
            providers: [
                CatComponent,
                {
                    provide: CatService
                }
            ]
        }).compileComponents();
    }));

    it('should create the app', () => {
        expect(app).toBeTruthy();
    });

    it('catData should be empty initially', () => {
        expect(app.catData.length).toBe(0);
    });

    it('catData should have cat list populated after ngOnInit', (done: DoneFn) => {
        app.ngOnInit();
        service.lastResult.subscribe(() => {
            expect(app.catData.length).toBeGreaterThan(0);
            done();
        },
        done.fail)
    });
});
