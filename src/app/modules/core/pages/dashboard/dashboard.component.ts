import { Component } from '@angular/core';
import { Path } from 'shared';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  path = Path;
}
