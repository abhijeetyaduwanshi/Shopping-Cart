import { TestBed } from '@angular/core/testing';

import { BreadsService } from './breads.service';

describe('BreadsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreadsService = TestBed.get(BreadsService);
    expect(service).toBeTruthy();
  });
});
