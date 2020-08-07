import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from './../../../../app.module';
import { SignInToYourProfileComponent } from './sign-in-to-your-profile.component';

describe('SignInToYourProfileComponent', () => {
    let component: SignInToYourProfileComponent;
    let fixture: ComponentFixture<SignInToYourProfileComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
            declarations: [ SignInToYourProfileComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SignInToYourProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
