import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Path } from 'shared';
import { AppState } from 'app.reducer';
import { coreSelectors, coreActions } from '../../store';

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
  isOpen$: Observable<boolean>;
  path = Path;

  constructor(private store: Store<AppState>) {
    this.isOpen$ = store.pipe(select(coreSelectors.selectIsMenuOpen));
    this.isOpen$.subscribe((nextIsOpen) => {
      if (nextIsOpen === true) this.dialog?.nativeElement.showModal();
    });
  }

  closeDialog() {
    this.store.dispatch(coreActions.closeMenu());
    setTimeout(() => this.dialog?.nativeElement.close(), 150);
  }
}
