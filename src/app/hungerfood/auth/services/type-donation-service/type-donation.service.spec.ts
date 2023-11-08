import { TestBed } from '@angular/core/testing';

import { TypeDonationService } from './type-donation.service';

describe('TypeDonationService', () => {
  let service: TypeDonationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeDonationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
