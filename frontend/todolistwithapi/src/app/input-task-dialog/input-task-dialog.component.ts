import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { TaskServiceService } from '../task-service.service';
import { TaskData } from '../task';
import { format } from 'date-fns';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '../notification/notification.component';


@Component({
  selector: 'app-input-task-dialog',
  templateUrl: './input-task-dialog.component.html',
  styleUrls: ['./input-task-dialog.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    MatDividerModule, MatCheckboxModule, FormsModule, MatProgressBarModule, CommonModule],
})
export class InputTaskDialogComponent {

  isSubmitting: boolean = false;

  @ViewChild('tasInput') tasInput!: any;
  deadline!: Date;
  isChecked: boolean = false;
  completionTime!: Date;

  constructor(private taskServiceService: TaskServiceService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<InputTaskDialogComponent>) {

  }

  deadlineChanged(event: any) {
    this.deadline = event.value;
  }

  applyDeadlineDate() {
    console.log('Start Date Applied:', this.deadline);
  }

  onCheckboxChange() {
    console.log(this.isChecked)
    this.completionTime = new Date();
  }

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(NotificationComponent, {
      data: { message },
      duration: 5 * 1000,
    });
  }

  onSubmit(): void {

    if(this.tasInput.nativeElement.value == "") { 
      this.openSnackBar('Please select input a task.'); return; 
    }

    let dateOfConpletion: string;
    if(this.completionTime) {
      dateOfConpletion = format(this.completionTime, 'yyyy-MM-dd HH:mm:ss');
    } else {
      dateOfConpletion = "";
    }

    const task: TaskData = {
      task: this.tasInput.nativeElement.value,
      deadline: this.deadline,
      checked: this.isChecked,
      completionTime: dateOfConpletion,
    }
    console.log(task);
    
    this.isSubmitting = true;
    this.taskServiceService.submitTaskForm(task).subscribe({
      next: (response) => {
        this.dialogRef.close("Task has been successfully recorded.");
      },
      error: (error) => {
        this.isSubmitting = false;
        console.log("Error adding task...")
      },
    });

  }
}
