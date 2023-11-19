import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateFoodComponent } from './donate-food.component';

describe('DonateFoodComponent', () => {
  let component: DonateFoodComponent;
  let fixture: ComponentFixture<DonateFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonateFoodComponent]
    });
    fixture = TestBed.createComponent(DonateFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
