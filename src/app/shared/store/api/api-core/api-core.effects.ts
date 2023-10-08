import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';

import { ApiCoreService } from './api-core.service';
import { actions } from '.';
import { catchError, exhaustMap, of, tap } from 'rxjs';
import { selectors as apiAuthSelectors } from '../api-auth';
import { Store } from '@ngrx/store';
import { AppState } from 'app.store';

@Injectable()
export class Effects {
  addAsset$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.addAsset),
        concatLatestFrom(() =>
          this.store.select(apiAuthSelectors.selectAuthData)
        ),
        exhaustMap(([{ asset }, authData]) =>
          this.apiCoreService.addAsset(asset, authData!.userId).pipe(
            tap((response) => console.log(response)),
            catchError((error) => of(actions.errorResponse({ error })))
          )
        )
      ),
    { dispatch: false }
  );

  fetchAssets$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.fetchAssets),
        concatLatestFrom(() =>
          this.store.select(apiAuthSelectors.selectAuthData)
        ),
        exhaustMap(([_, authData]) =>
          this.apiCoreService.fetchAssets(authData!.userId).pipe(
            tap((response) => console.log(response)),
            catchError((error) => of(actions.errorResponse({ error })))
          )
        )
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private apiCoreService: ApiCoreService,
    private store: Store<AppState>
  ) {}
}
