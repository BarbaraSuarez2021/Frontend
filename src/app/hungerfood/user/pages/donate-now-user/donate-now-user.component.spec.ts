import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateNowUserComponent } from './donate-now-user.component';

describe('DonateNowUserComponent', () => {
  let component: DonateNowUserComponent;
  let fixture: ComponentFixture<DonateNowUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonateNowUserComponent]
    });
    fixture = TestBed.createComponent(DonateNowUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
