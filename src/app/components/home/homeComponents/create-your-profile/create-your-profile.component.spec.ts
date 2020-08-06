import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from './../../../../app.module';
import { CreateYourProfileComponent } from './create-your-profile.component';

describe('CreateYourProfileComponent', () => {
    let component: CreateYourProfileComponent;
    let fixture: ComponentFixture<CreateYourProfileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
            declarations: [ CreateYourProfileComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateYourProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
