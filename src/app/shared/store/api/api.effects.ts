import { Injectable } from '@angular/core';
import { apiActions } from '.';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { Path } from 'shared/enums';
import { LoginResponse, UserData } from './api.types';

const createHandleAuthenticationSuccess =
  (redirect: boolean) => (data: LoginResponse) => {
    const { idToken, expiresIn, email, localId } = data;

    const expirationTime = new Date().getTime() + Number(expiresIn) * 1000;

    const userData: UserData = {
      email,
      expirationTime,
      token: idToken,
      userId: localId,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    return apiActions.authenticationSuccess({
      userData,
      redirect,
    });
  };

@Injectable()
export class ApiEffects {
  logIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(apiActions.logIn),
      exhaustMap(({ email, password }) =>
        this.apiService.login(email, password).pipe(
          map(createHandleAuthenticationSuccess(true)),
          catchError((error) =>
            of(apiActions.authenticationFailed({ error })).pipe(
              tap((error) => console.log('my error: ', error))
            )
          )
        )
      )
    )
  );

  autoLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(apiActions.autoLogin),
      map(() => {
        const localUser = localStorage.getItem('userData');

        if (!localUser) return apiActions.autoLoginFailed();

        const parsedLocalUser = <UserData>JSON.parse(localUser);
        const tokenIsValid =
          new Date().getTime() < parsedLocalUser.expirationTime;

        if (tokenIsValid) {
          return apiActions.authenticationSuccess({
            userData: parsedLocalUser,
            redirect: true, // TODO: add conditional redirect
          });
        }

        return apiActions.autoLoginFailed();
      })
    )
  );

  redirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(apiActions.authenticationSuccess),
        tap((payload) => {
          if (payload.redirect) {
            this.router.navigate([`/${Path.Dashboard}`]);
          }
        })
      ),
    { dispatch: false }
  );

  logOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(apiActions.logOut),
        tap(() => {
          localStorage.removeItem('userData');
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
