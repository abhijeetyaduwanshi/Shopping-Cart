import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularAmongYourNeighborsComponent } from './popular-among-your-neighbors.component';

describe('PopularAmongYourNeighborsComponent', () => {
  let component: PopularAmongYourNeighborsComponent;
  let fixture: ComponentFixture<PopularAmongYourNeighborsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularAmongYourNeighborsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularAmongYourNeighborsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
