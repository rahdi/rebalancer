import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AppState } from 'app.store';
import { coreActions, coreSelectors } from '../../store';
import { sharedStore } from 'shared';

const apiAuthActions = sharedStore.actions.apiAuth;
const apiAuthSelectors = sharedStore.selectors.apiAuth;

@Component({
  selector: 'app-refresh-token-dialog',
  templateUrl: './refresh-token-dialog.component.html',
  styleUrls: ['./refresh-token-dialog.component.css'],
})
export class RefreshTokenDialogComponent implements OnDestroy {
  @ViewChild('refreshTokenDialog') dialog?: ElementRef<HTMLDialogElement>;
  isOpen = false;
  isOpenSub: Subscription;
  isLoading$ = this.store.select(apiAuthSelectors.selectIsLoading);
  refreshToken = '';
  refreshTokenSub: Subscription;
  timeout: NodeJS.Timeout | null = null;

  constructor(private store: Store<AppState>) {
    this.isOpenSub = this.store
      .select(coreSelectors.selectIsTokenDialogOpen)
      .subscribe((nextIsOpen) => {
        if (nextIsOpen && !this.isOpen) {
          this.dialog?.nativeElement.showModal();
        } else if (!nextIsOpen && this.isOpen) {
          this.timeout = setTimeout(() => {
            this.dialog?.nativeElement.close();
          }, 150);
        }

        this.isOpen = nextIsOpen;
      });

    this.refreshTokenSub = this.store
      .select(apiAuthSelectors.selectAuthData)
      .subscribe((authData) => {
        if (!authData?.refreshToken) return;

        this.refreshToken = authData.refreshToken;
      });
  }

  customClearTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }

  logOut() {
    this.store.dispatch(coreActions.closeTokenDialog());
    this.customClearTimeout();

    this.timeout = setTimeout(() => {
      this.dialog?.nativeElement.close();
      this.store.dispatch(apiAuthActions.logOut());
    }, 150);
  }

  continue() {
    this.store.dispatch(
      apiAuthActions.refreshToken({ token: this.refreshToken })
    );
  }

  ngOnDestroy(): void {
    this.store.dispatch(coreActions.closeTokenDialog());
    this.customClearTimeout();
    this.isOpenSub.unsubscribe();
    this.refreshTokenSub.unsubscribe();
  }
}
