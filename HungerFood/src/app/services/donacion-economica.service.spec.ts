import { TestBed } from '@angular/core/testing';

import { DonacionEconomicaService } from './donacion-economica.service';

describe('DonacionEconomicaService', () => {
  let service: DonacionEconomicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonacionEconomicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
