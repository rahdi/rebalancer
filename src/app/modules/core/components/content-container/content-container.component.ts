import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
})
export class ContentContainerComponent {
  @Input() header = '';
  dialogIsOpen = false;

  handleClose() {
    this.dialogIsOpen = false;
  }

  openDialog() {
    this.dialogIsOpen = true;
  }
}
