import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInToYourProfileComponent } from './sign-in-to-your-profile.component';

describe('SignInToYourProfileComponent', () => {
  let component: SignInToYourProfileComponent;
  let fixture: ComponentFixture<SignInToYourProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
