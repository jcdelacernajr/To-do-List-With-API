import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
})
export class PrivacyPolicyComponent {

  constructor(private location: Location){}

  goBack(): void {
    this.location.back();
  }

}
