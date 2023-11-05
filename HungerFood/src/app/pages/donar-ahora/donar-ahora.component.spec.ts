import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonarAhoraComponent } from './donar-ahora.component';

describe('DonarAhoraComponent', () => {
  let component: DonarAhoraComponent;
  let fixture: ComponentFixture<DonarAhoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonarAhoraComponent]
    });
    fixture = TestBed.createComponent(DonarAhoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
