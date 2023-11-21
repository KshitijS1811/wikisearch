import { TestBed } from '@angular/core/testing';

import { PediaService } from './pedia.service';

describe('PediaService', () => {
  let service: PediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
