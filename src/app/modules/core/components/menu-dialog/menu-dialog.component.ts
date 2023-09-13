import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuService } from '../../services';
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
export class MenuDialogComponent {
  @ViewChild('menuDialog') dialog?: ElementRef<HTMLDialogElement>;
  isOpen = false;
  path = Path;

  constructor(private menuService: MenuService) {
    this.menuService.isOpenUpdated.subscribe((isOpen) => {
      this.isOpen = isOpen;
      if (isOpen === true) this.dialog?.nativeElement.showModal();
    });
  }

  closeDialog() {
    this.menuService.closeMenu();
    setTimeout(() => this.dialog?.nativeElement.close(), 150);
  }
}
