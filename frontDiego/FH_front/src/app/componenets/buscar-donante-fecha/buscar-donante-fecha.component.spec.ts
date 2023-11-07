import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDonanteFechaComponent } from './buscar-donante-fecha.component';

describe('BuscarDonanteFechaComponent', () => {
  let component: BuscarDonanteFechaComponent;
  let fixture: ComponentFixture<BuscarDonanteFechaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarDonanteFechaComponent]
    });
    fixture = TestBed.createComponent(BuscarDonanteFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
