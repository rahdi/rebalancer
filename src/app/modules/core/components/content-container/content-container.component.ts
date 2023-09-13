import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Path } from 'shared';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styles: [
    `
      dialog {
        margin-right: -320px;
        box-shadow: 0 0 0 120vmax rgba(0, 0, 0, 0);
      }
      dialog.isOpen {
        margin-right: 0;
        box-shadow: 0 0 0 120vmax rgba(0, 0, 0, 0.5);
      }
      dialog::backdrop {
        background-color: unset;
      }
    `,
  ],
})
export class ContentContainerComponent {
  @Input() header = '';
  path = Path;

  @ViewChild('menuDialog') dialog?: ElementRef<HTMLDialogElement>;
  dialogIsOpen = false;

  openDialog() {
    this.dialogIsOpen = true;
    this.dialog?.nativeElement.showModal();
  }

  closeDialog() {
    this.dialogIsOpen = false;
    setTimeout(() => this.dialog?.nativeElement.close(), 150);
  }
}
