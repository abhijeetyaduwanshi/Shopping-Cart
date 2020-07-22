import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAgainComponent } from './order-again.component';

describe('OrderAgainComponent', () => {
  let component: OrderAgainComponent;
  let fixture: ComponentFixture<OrderAgainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderAgainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
