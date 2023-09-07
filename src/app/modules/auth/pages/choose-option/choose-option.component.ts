import { Component } from '@angular/core';
import { Path } from 'shared';

@Component({
  selector: 'app-choose-option',
  templateUrl: './choose-option.component.html',
})
export class ChooseOptionComponent {
  path = Path;
}
