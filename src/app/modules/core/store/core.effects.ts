import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { map, merge, switchMap, takeWhile, timer } from 'rxjs';

import { sharedStore } from 'shared';
import { coreActions, coreSelectors } from '.';
import { AppState } from 'app.store';

const apiActions = sharedStore.actions.api;
const apiSelectors = sharedStore.selectors.api;

@Injectable()
export class CoreEffects {
  openRefreshTokenDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        ...[apiActions.authenticationSuccess, apiActions.refreshTokenSuccess]
      ),
      map((data) => {
        const {
          authData: { expirationTime },
        } = data;
        const expiresIn = expirationTime - new Date().getTime();

        const openDialog$ = timer(expiresIn - 60000).pipe(
          concatLatestFrom(() =>
            this.store.select(apiSelectors.selectAuthData)
          ),
          takeWhile(([_, authData]) => !!authData),
          map(() => coreActions.openTokenDialog())
        );

        const logOut$ = timer(expiresIn).pipe(
          concatLatestFrom(() =>
            this.store.select(coreSelectors.selectIsTokenDialogOpen)
          ),
          takeWhile(([_, isTokenDialogOpen]) => isTokenDialogOpen),
          map(() => apiActions.logOut())
        );

        return { openDialog$, logOut$ };
      }),
      switchMap(({ openDialog$, logOut$ }) => merge(openDialog$, logOut$))
    )
  );

  closeRefreshTokenDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(apiActions.refreshTokenSuccess),
      map(() => coreActions.closeTokenDialog())
    )
  );

  constructor(private actions$: Actions, private store: Store<AppState>) {}
}
