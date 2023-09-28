import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';

import { sharedStore } from 'shared';
import { coreActions } from '.';

const apiActions = sharedStore.actions.api;

@Injectable()
export class CoreEffects {
  closeRefreshTokenDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(apiActions.refreshTokenSuccess),
      map(() => coreActions.closeTokenDialog())
    )
  );
  constructor(private actions$: Actions) {}
}
