import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { Path, sharedStore } from 'shared';
import { AppState } from 'app.store';
import { coreSelectors, coreActions } from '../../store';

const apiAuthActions = sharedStore.actions.apiAuth;
const apiAuthSelectors = sharedStore.selectors.apiAuth;

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.css'],
})
export class MenuDialogComponent implements OnDestroy {
  @ViewChild('menuDialog') dialog?: ElementRef<HTMLDialogElement>;
  isOpen$ = this.store.select(coreSelectors.selectIsMenuOpen);
  isOpenSub: Subscription;
  userEmail = this.store.select(apiAuthSelectors.selectEmail);
  path = Path;

  constructor(private store: Store<AppState>, private router: Router) {
    this.isOpenSub = this.isOpen$.subscribe((nextIsOpen) => {
      if (nextIsOpen) this.dialog?.nativeElement.showModal();
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
    this.store.dispatch(apiAuthActions.logOut());
  }

  onClose($event: Event) {
    if (($event.target as HTMLDialogElement).classList.contains('isOpen'))
      this.closeDialog();
  }

  ngOnDestroy(): void {
    this.store.dispatch(coreActions.closeMenu());
    this.isOpenSub.unsubscribe();
  }
}
