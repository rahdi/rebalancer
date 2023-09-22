import { Injectable } from '@angular/core';
import { apiActions } from '.';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { Path } from 'shared/enums';

@Injectable()
export class ApiEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(apiActions.login),
      exhaustMap(({ email, password }) =>
        this.apiService.login(email, password).pipe(
          map((data) => {
            this.router.navigate([`/${Path.Empty}`]);
            return apiActions.authenticationSuccess({ data });
          }),
          catchError((error) => of(apiActions.authenticationFailed({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private router: Router
  ) {}
}
