import { Injectable } from '@angular/core';
import { map, mergeMap, takeWhile, timer } from 'rxjs';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { snackbarActions, snackbarSelectors } from '.';
import { ErrorResponse, apiStore } from '../api';
import { AppState } from 'app.store';

const transformErrorMessage = (error: ErrorResponse) => {
  let message = 'Something went wrong.';

  if (!error) return message;

  switch (error.error.message) {
    case 'INVALID_LOGIN_CREDENTIALS':
      message = 'Wrong email or password!';
      break;
    case 'INVALID_EMAIL':
      message = 'Please provide a valid email address';
      break;
    default:
      break;
  }

  return message;
};

@Injectable()
export class SnackbarEffects {
  showSnackbarOnError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(apiStore.actions.apiAuth.errorResponse),
      map(({ error }) =>
        snackbarActions.addSnackbar({
          payload: { color: 'warning', message: transformErrorMessage(error) },
        })
      )
    )
  );

  hideSnackbarAfterTimeout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(snackbarActions.addSnackbar),
      mergeMap(() =>
        timer(4000).pipe(
          concatLatestFrom(() =>
            this.store.select(snackbarSelectors.selectSnackbars)
          ),
          takeWhile(([_, snackbars]) => !!snackbars.length),
          map(() => snackbarActions.removeSnackbar({ index: 0 }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private store: Store<AppState>) {}
}
