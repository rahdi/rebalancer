import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-close-icon',
  templateUrl: './close-icon.component.html',
})
export class CloseIconComponent {
  @Input() width = 16;
  @Input() height = 16;
  @Input() color = 'hsl(206, 88%, 20%)';
}
