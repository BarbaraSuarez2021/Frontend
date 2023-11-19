import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Report1AdminComponent } from './report1-admin.component';

describe('Report1AdminComponent', () => {
  let component: Report1AdminComponent;
  let fixture: ComponentFixture<Report1AdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Report1AdminComponent]
    });
    fixture = TestBed.createComponent(Report1AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
