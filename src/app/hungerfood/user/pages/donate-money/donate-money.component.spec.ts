import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateMoneyComponent } from './donate-money.component';

describe('DonateMoneyComponent', () => {
  let component: DonateMoneyComponent;
  let fixture: ComponentFixture<DonateMoneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonateMoneyComponent]
    });
    fixture = TestBed.createComponent(DonateMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
