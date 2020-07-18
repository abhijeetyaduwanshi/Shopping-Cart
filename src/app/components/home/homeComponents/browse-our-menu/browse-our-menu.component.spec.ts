import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseOurMenuComponent } from './browse-our-menu.component';

describe('BrowseOurMenuComponent', () => {
  let component: BrowseOurMenuComponent;
  let fixture: ComponentFixture<BrowseOurMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseOurMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseOurMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
