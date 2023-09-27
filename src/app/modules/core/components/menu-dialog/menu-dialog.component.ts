import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { Path, sharedStore } from 'shared';
import { AppState } from 'app.store';
import { coreSelectors, coreActions } from '../../store';

const apiActions = sharedStore.actions.api;
const apiSelectors = sharedStore.selectors.api;

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
export class MenuDialogComponent implements OnDestroy {
  @ViewChild('menuDialog') dialog?: ElementRef<HTMLDialogElement>;
  isOpen$ = this.store.select(coreSelectors.selectIsMenuOpen);
  isOpenSub: Subscription;
  userEmail = this.store.select(apiSelectors.selectEmail);
  path = Path;

  constructor(private store: Store<AppState>, private router: Router) {
    this.isOpenSub = this.isOpen$.subscribe((nextIsOpen) => {
      if (nextIsOpen === true) this.dialog?.nativeElement.showModal();
    });
  }

  closeDialog(callback?: Function) {
    this.store.dispatch(coreActions.closeMenu());
    setTimeout(() => {
      this.dialog?.nativeElement.close();
      if (callback) {
        callback.bind(this)();
      }
    }, 150);
  }

  logIn() {
    this.router.navigate([`/${Path.Login}`]);
  }

  logOut() {
    this.store.dispatch(apiActions.logOut());
  }

  onClose($event: Event) {
    if (($event.target as HTMLDialogElement).classList.contains('isOpen'))
      this.closeDialog();
  }

  ngOnDestroy(): void {
    this.isOpenSub.unsubscribe();
  }
}
