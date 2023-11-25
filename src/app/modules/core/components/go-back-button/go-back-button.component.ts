import { Component, Input } from '@angular/core';
import { Path } from 'shared';

@Component({
  selector: 'app-go-back-button',
  templateUrl: './go-back-button.component.html',
})
export class GoBackButtonComponent {
  @Input() goBackURL: Path = Path.Dashboard;
}
