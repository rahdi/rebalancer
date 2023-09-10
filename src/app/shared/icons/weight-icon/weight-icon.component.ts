import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weight-icon',
  templateUrl: 'weight-icon.component.html',
})
export class WeightIconComponent {
  @Input() width = 217;
  @Input() height = 224;
}
