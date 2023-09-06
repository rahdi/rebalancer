import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-styled-button',
  template: `
    <button
      class="py-2 px-7 bg-sky-900 text-white rounded hover:cursor-pointer hover:shadow hover:shadow-sky-900 hover:bg-sky-950 z-10 transition-all"
      (click)="onClick()"
    >
      {{ title }}
    </button>
  `,
})
export class StyledButtonComponent {
  @Input() title = 'my button';

  onClick = () => console.log('click');
}
