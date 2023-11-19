import { TestBed } from '@angular/core/testing';

import { TypeFoodService } from './type-food.service';

describe('TypeFoodService', () => {
  let service: TypeFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
