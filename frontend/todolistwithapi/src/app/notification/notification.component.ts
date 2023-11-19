import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarRef, MatSnackBarModule, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  styles: [
    `
    :host {
      display: flex;
    }

    .example-pizza-party {
      color: hotpink;
    }
  `,
  ],
  standalone: true,
  imports: [MatButtonModule, MatSnackBarModule],
})
export class NotificationComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
  snackBarRef = inject(MatSnackBarRef);
}
