import { TestBed } from '@angular/core/testing';

import { BeautifulLibService } from './beautiful-lib.service';

describe('BeautifulLibService', () => {
  let service: BeautifulLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeautifulLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
