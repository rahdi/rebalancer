import { Component } from '@angular/core';
import { Path } from 'shared';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {
  path = Path;
}
