import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { InputTaskDialogComponent } from '../input-task-dialog/input-task-dialog.component';
import { CommonModule, DatePipe, Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '../notification/notification.component';
import { TaskData } from '../task';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { TaskServiceService } from '../task-service.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  standalone: true,
  imports: [MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    FormsModule,
    CommonModule],
  providers: [DatePipe],
})
export class TodoListComponent implements AfterViewInit {

  displayedColumns: string[] = ['No.', 'task', 'deadline', 'checked', 'completionTime'];
  dataSource = new MatTableDataSource<TaskData>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog,
    private taskServiceService: TaskServiceService,
    private location: Location,
    private taskService: TaskServiceService,
    private _snackBar: MatSnackBar,
    private datePipe: DatePipe,
    private cdr: ChangeDetectorRef,) { }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.taskService.getTaskData().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(InputTaskDialogComponent, {
      width: '600px',
      //height: '90%',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.openSnackBar(result);
      // Refesh the table 
      this.refreshTaskTable();
    });
  }

  goBack(): void {
    this.location.back();
  }

  checkboxChanged(event: any, element: TaskData): void {
    // console.log(`Checkbox changed for element with ` + element.checked);
    this.taskServiceService.updateTask(element).subscribe({
      next: (response) => {
        console.log(response);
        this.refreshTaskTable();
      },
      error: (error) => {
        console.log("Error updating task...")
      },
    });

  }

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(NotificationComponent, {
      data: { message },
      duration: 5 * 1000,
    });
  }

  formatDate(timestamp: number): string {
    if(timestamp == null) { return ''; }
    const date = new Date(timestamp);
    return this.datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss') || '';
  }

  refreshTaskTable(){
    this.taskService.getTaskData().subscribe(data => {
      this.dataSource.data = data;
      this.cdr.detectChanges();
    });
  }
}
