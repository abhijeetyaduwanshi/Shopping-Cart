import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInOrCreateNewAccountComponent } from './sign-in-or-create-new-account.component';

describe('SignInOrCreateNewAccountComponent', () => {
  let component: SignInOrCreateNewAccountComponent;
  let fixture: ComponentFixture<SignInOrCreateNewAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInOrCreateNewAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInOrCreateNewAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
