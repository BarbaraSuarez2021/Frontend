import { TestBed } from '@angular/core/testing';

import { RegistroDonacionAlimentoService } from './registro-donacion-alimento.service';

describe('RegistroDonacionAlimentoService', () => {
  let service: RegistroDonacionAlimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroDonacionAlimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
