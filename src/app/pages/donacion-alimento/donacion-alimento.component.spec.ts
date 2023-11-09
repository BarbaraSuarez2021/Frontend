import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionAlimentoComponent } from './donacion-alimento.component';

describe('DonacionAlimentoComponent', () => {
  let component: DonacionAlimentoComponent;
  let fixture: ComponentFixture<DonacionAlimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonacionAlimentoComponent]
    });
    fixture = TestBed.createComponent(DonacionAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
