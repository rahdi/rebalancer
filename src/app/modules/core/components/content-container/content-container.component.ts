import { Component, Input } from '@angular/core';
import { Path } from 'shared';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
})
export class ContentContainerComponent {
  @Input() header = '';
  @Input() goBackButton?: boolean;
  path = Path;
}
