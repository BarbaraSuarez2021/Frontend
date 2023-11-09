import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUComponent } from './editar-u.component';

describe('EditarUComponent', () => {
  let component: EditarUComponent;
  let fixture: ComponentFixture<EditarUComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarUComponent]
    });
    fixture = TestBed.createComponent(EditarUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
