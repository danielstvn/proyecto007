import { TestBed } from '@angular/core/testing';

import { CasosCovidService } from './casos-covid.service';

describe('CasosCovidService', () => {
  let service: CasosCovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasosCovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
