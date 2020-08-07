import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from './../../app.module';
import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
    let component: ProductComponent;
    let fixture: ComponentFixture<ProductComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
            declarations: [ ProductComponent ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
