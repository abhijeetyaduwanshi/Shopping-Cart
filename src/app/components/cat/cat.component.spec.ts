import { TestBed, async } from '@angular/core/testing';

import { AngularMaterialModule } from './../../material.module';
import { CatComponent } from './cat.component';
import { CatService } from './../../services/catService/cat.service';

describe('CatComponent', () => {
    const url: String = "http://localhost:8080/api";

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AngularMaterialModule],
            declarations: [CatComponent],
            providers: [
                {
                    provide: CatService,
                    useValue: url
                }
            ]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(CatComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
