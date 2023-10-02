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
import { AuthData, LoginResponse, RegisterResponse } from './api.types';

const LOCAL_STORAGE_AUTH_DATA = 'authData';
const LOCAL_STORAGE_EMAIL = 'email';

const createExpirationTime = (expiresIn: string | number) =>
  new Date().getTime() + Number(expiresIn) * 1000;

const createHandleAuthenticationSuccess =
  <T extends LoginResponse | RegisterResponse>(redirect: boolean) =>
  (data: T) => {
    const { idToken, expiresIn, email, localId, refreshToken } = data;

    const authData: AuthData = {
      expirationTime: createExpirationTime(expiresIn),
      token: idToken,
      refreshToken,
      userId: localId,
    };
    localStorage.setItem(LOCAL_STORAGE_AUTH_DATA, JSON.stringify(authData));
    localStorage.setItem(LOCAL_STORAGE_EMAIL, JSON.stringify(email));
    return apiActions.authenticationSuccess({
      authData,
      email,
      redirect,
    });
  };

@Injectable()
export class ApiEffects {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(apiActions.register),
      exhaustMap((payload) =>
        this.apiService.register(payload).pipe(
          map(createHandleAuthenticationSuccess(true)),
          catchError((error) => of(apiActions.apiResponseFailed(error)))
        )
      )
    )
  );

  logIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(apiActions.logIn),
      exhaustMap((payload) =>
        this.apiService.login(payload).pipe(
          map(createHandleAuthenticationSuccess(true)),
          catchError((error) => of(apiActions.apiResponseFailed(error)))
        )
      )
    )
  );

  autoLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(apiActions.autoLogin),
      map(() => {
        const localAuthData = localStorage.getItem(LOCAL_STORAGE_AUTH_DATA);
        const localEmail = localStorage.getItem(LOCAL_STORAGE_EMAIL);

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

            localStorage.setItem(
              LOCAL_STORAGE_AUTH_DATA,
              JSON.stringify(authData)
            );
            return apiActions.refreshTokenSuccess({ authData });
          }),
          catchError((error) => of(apiActions.apiResponseFailed(error)))
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
          localStorage.removeItem(LOCAL_STORAGE_AUTH_DATA);
          localStorage.removeItem(LOCAL_STORAGE_EMAIL);
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
