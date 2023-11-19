import { TestBed } from '@angular/core/testing';

import { RegisterDonationFoodService } from './register-donation-food.service';

describe('RegisterDonationFoodService', () => {
  let service: RegisterDonationFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterDonationFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
