import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-labeled-input',
  templateUrl: './labeled-input.component.html',
})
export class LabeledInputComponent {
  @Input() id!: string;
  @Input() label = '';
  @Input() type: HTMLInputElement['type'] = 'text';
}
