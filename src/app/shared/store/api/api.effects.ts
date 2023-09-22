import { Injectable } from '@angular/core';
import { apiActions } from '.';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { Path } from 'shared/enums';

@Injectable()
export class ApiEffects {
  logIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(apiActions.logIn),
      exhaustMap(({ email, password }) =>
        this.apiService.login(email, password).pipe(
          tap((data) => {
            localStorage.setItem('user', JSON.stringify(data));
          }),
          map((data) => apiActions.authenticationSuccess({ data })),
          catchError((error) =>
            of(apiActions.authenticationFailed({ error })).pipe(
              tap((error) => console.log('my error: ', error))
            )
          )
        )
      )
    )
  );

  redirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(apiActions.authenticationSuccess),
        tap(() => this.router.navigate([`/${Path.Empty}`]))
      ),
    { dispatch: false }
  );

  logOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(apiActions.logOut),
        tap(() => {
          localStorage.removeItem('user');
          this.router.navigate([`/${Path.Login}`]);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    private router: Router
  ) {}
}
