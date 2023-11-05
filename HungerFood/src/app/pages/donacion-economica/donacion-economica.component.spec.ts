import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionEconomicaComponent } from './donacion-economica.component';

describe('DonacionEconomicaComponent', () => {
  let component: DonacionEconomicaComponent;
  let fixture: ComponentFixture<DonacionEconomicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonacionEconomicaComponent]
    });
    fixture = TestBed.createComponent(DonacionEconomicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
