import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Path } from 'shared';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
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
export class MenuDialogComponent implements OnChanges {
  @ViewChild('menuDialog') dialog?: ElementRef<HTMLDialogElement>;
  @Input() isOpen = false;
  @Output() closeEvent = new EventEmitter();
  path = Path;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen'].currentValue === true)
      this.dialog?.nativeElement.showModal();
  }

  closeDialog() {
    this.closeEvent.emit();
    setTimeout(() => this.dialog?.nativeElement.close(), 150);
  }
}
