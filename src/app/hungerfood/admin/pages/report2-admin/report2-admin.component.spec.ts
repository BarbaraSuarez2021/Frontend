import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report2AdminComponent } from './report2-admin.component';

describe('Report2AdminComponent', () => {
  let component: Report2AdminComponent;
  let fixture: ComponentFixture<Report2AdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Report2AdminComponent]
    });
    fixture = TestBed.createComponent(Report2AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
