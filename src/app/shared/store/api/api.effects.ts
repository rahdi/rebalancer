import { Injectable } from '@angular/core';
import { apiActions } from '.';
import {
  catchError,
  concatMap,
  exhaustMap,
  filter,
  map,
  of,
  take,
  tap,
} from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NavigationEnd, Router } from '@angular/router';

import { ApiService } from './api.service';
import { Path } from 'shared/enums';
import { AuthData, LoginResponse } from './api.types';

// TODO: add error handling

const createExpirationTime = (expiresIn: string | number) =>
  new Date().getTime() + Number(expiresIn) * 1000;

const createHandleAuthenticationSuccess =
  (redirect: boolean) => (data: LoginResponse) => {
    const { idToken, expiresIn, email, localId, refreshToken } = data;

    const authData: AuthData = {
      expirationTime: createExpirationTime(expiresIn),
      token: idToken,
      refreshToken,
      userId: localId,
    };
    localStorage.setItem('authData', JSON.stringify(authData));
    localStorage.setItem('email', JSON.stringify(email));
    return apiActions.authenticationSuccess({
      authData,
      email,
      redirect,
    });
  };

@Injectable()
export class ApiEffects {
  logIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(apiActions.logIn),
      exhaustMap((payload) =>
        this.apiService.login(payload).pipe(
          map(createHandleAuthenticationSuccess(true)),
          catchError((error) =>
            of(apiActions.authenticationFailed(error)).pipe(
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
        const localAuthData = localStorage.getItem('authData');
        const localEmail = localStorage.getItem('email');

        if (!localAuthData || !localEmail) return apiActions.autoLoginFailed();

        const parsedLocalAuthData = <AuthData>JSON.parse(localAuthData);
        const parsedLocalEmail = <string>JSON.parse(localEmail);

        const tokenIsValid =
          new Date().getTime() < parsedLocalAuthData.expirationTime;

        if (tokenIsValid) {
          return apiActions.authenticationSuccess({
            authData: parsedLocalAuthData,
            email: parsedLocalEmail,
            redirect: false,
          });
        }

        return apiActions.logOut();
      })
    )
  );

  refreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(apiActions.refreshToken),
      exhaustMap(({ token }) =>
        this.apiService.refreshToken(token).pipe(
          map((response) => {
            const { expires_in, id_token, refresh_token, user_id } = response;

            const authData: AuthData = {
              expirationTime: createExpirationTime(expires_in),
              refreshToken: refresh_token,
              token: id_token,
              userId: user_id,
            };

            localStorage.setItem('authData', JSON.stringify(authData));
            return apiActions.refreshTokenSuccess({ authData });
          }),
          catchError((error) =>
            of(apiActions.refreshTokenFailed(error)).pipe(
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
        tap((payload) => {
          if (payload.redirect) {
            this.router.navigate([`/${Path.Dashboard}`]);
          }
        }),
        filter((payload) => payload && !payload.redirect),
        concatMap(() =>
          this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            tap(() => {
              const authPaths = [
                Path.Welcome,
                Path.ChooseOption,
                Path.Login,
                Path.Register,
              ];
              if (authPaths.some((path) => this.router.url.includes(path))) {
                this.router.navigate([`/${Path.Dashboard}`]);
              }
            }),
            take(1)
          )
        )
      ),
    { dispatch: false }
  );

  logOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(apiActions.logOut),
        tap(() => {
          localStorage.removeItem('authData');
          localStorage.removeItem('email');
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
