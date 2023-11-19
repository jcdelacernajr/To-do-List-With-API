import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tos',
  templateUrl: './tos.component.html',
  styleUrls: ['./tos.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
})
export class TosComponent {

  constructor(private location: Location){}

  goBack(): void {
    this.location.back();
  }

}
