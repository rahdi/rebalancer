import { Component, Input } from '@angular/core';
import { Path } from 'shared';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css'],
})
export class ContentContainerComponent {
  @Input() header = '';
  path = Path;
}
