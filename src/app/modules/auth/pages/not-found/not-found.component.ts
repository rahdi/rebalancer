import { Component } from '@angular/core';
import { Path } from 'shared';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  path = Path;
}
