import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTaskDialogComponent } from './input-task-dialog.component';

describe('InputTaskDialogComponent', () => {
  let component: InputTaskDialogComponent;
  let fixture: ComponentFixture<InputTaskDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputTaskDialogComponent]
    });
    fixture = TestBed.createComponent(InputTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
