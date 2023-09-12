import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Path } from 'shared';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css'],
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
