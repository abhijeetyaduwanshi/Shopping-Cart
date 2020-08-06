import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialModule } from './../../../../material.module';
import { DeliveryOrPickupComponent } from './delivery-or-pickup.component';

describe('DeliveryOrPickupComponent', () => {
    let component: DeliveryOrPickupComponent;
    let fixture: ComponentFixture<DeliveryOrPickupComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AngularMaterialModule],
            declarations: [ DeliveryOrPickupComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DeliveryOrPickupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
