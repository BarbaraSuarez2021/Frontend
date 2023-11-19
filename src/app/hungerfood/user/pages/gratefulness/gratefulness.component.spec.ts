import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GratefulnessComponent } from './gratefulness.component';

describe('GratefulnessComponent', () => {
  let component: GratefulnessComponent;
  let fixture: ComponentFixture<GratefulnessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GratefulnessComponent]
    });
    fixture = TestBed.createComponent(GratefulnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
