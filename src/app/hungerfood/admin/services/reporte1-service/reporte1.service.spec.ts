import { TestBed } from '@angular/core/testing';

import { Reporte1Service } from './reporte1.service';

describe('Reporte1Service', () => {
  let service: Reporte1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Reporte1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
