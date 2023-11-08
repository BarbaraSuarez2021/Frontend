import { TestBed } from '@angular/core/testing';

import { FoodHungerService } from './food-hunger.service';

describe('FoodHungerService', () => {
  let service: FoodHungerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodHungerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
