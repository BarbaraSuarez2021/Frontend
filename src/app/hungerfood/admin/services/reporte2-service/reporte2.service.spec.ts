import { TestBed } from '@angular/core/testing';

import { Reporte2Service } from './reporte2.service';

describe('Reporte2Service', () => {
  let service: Reporte2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Reporte2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
