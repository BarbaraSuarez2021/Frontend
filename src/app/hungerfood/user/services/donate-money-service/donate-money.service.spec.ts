import { TestBed } from '@angular/core/testing';

import { DonateMoneyService } from './donate-money.service';

describe('DonateMoneyService', () => {
  let service: DonateMoneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonateMoneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
