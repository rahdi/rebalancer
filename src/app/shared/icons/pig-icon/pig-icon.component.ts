import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pig-icon',
  templateUrl: 'pig-icon.component.html',
})
export class PigIconComponent {
  @Input() width = 229;
  @Input() height = 237;
}
