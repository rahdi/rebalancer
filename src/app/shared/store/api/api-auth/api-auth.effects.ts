import { Injectable } from '@angular/core';
import { actions } from '.';
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

import { ApiAuthService } from './api-auth.service';
import { Path } from '../../../enums';
import { AuthData, LoginResponse, RegisterResponse } from './api-auth.types';

// DO NOT IMPORT HERE FROM ANOTHER STORE

const LOCAL_STORAGE_AUTH_DATA = 'authData';
const LOCAL_STORAGE_EMAIL = 'email';

const createExpirationTime = (expiresIn: string | number) =>
  new Date().getTime() + Number(expiresIn) * 1000;

const createHandleAuthenticationSuccess =
  <T extends LoginResponse | RegisterResponse>(redirect: boolean) =>
  (data: T) => {
    const { idToken, expiresIn, localId, refreshToken } = data;
    let email = data.email || 'Guest';

    const authData: AuthData = {
      expirationTime: createExpirationTime(expiresIn),
      token: idToken,
      refreshToken,
      userId: localId,
    };
    localStorage.setItem(LOCAL_STORAGE_AUTH_DATA, JSON.stringify(authData));
    localStorage.setItem(LOCAL_STORAGE_EMAIL, JSON.stringify(email));
    return actions.authenticationSuccess({
      authData,
      email,
      redirect,
    });
  };

@Injectable()
export class Effects {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.register),
      exhaustMap((payload) =>
        this.apiAuthService.register(payload).pipe(
          map(createHandleAuthenticationSuccess(true)),
          catchError((error) => of(actions.errorResponse(error)))
        )
      )
    )
  );

  logIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.logIn),
      exhaustMap((payload) =>
        this.apiAuthService.login(payload).pipe(
          map(createHandleAuthenticationSuccess(true)),
          catchError((error) => of(actions.errorResponse(error)))
        )
      )
    )
  );

  guestLogIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.guestLogIn),
      exhaustMap(() =>
        this.apiAuthService.guestLogin().pipe(
          map(createHandleAuthenticationSuccess(true)),
          catchError((error) => of(actions.errorResponse(error)))
        )
      )
    )
  );

  autoLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.autoLogin),
      map(() => {
        const localAuthData = localStorage.getItem(LOCAL_STORAGE_AUTH_DATA);
        const localEmail = localStorage.getItem(LOCAL_STORAGE_EMAIL);

        if (!localAuthData || !localEmail) return actions.autoLoginFailed();

        const parsedLocalAuthData = <AuthData>JSON.parse(localAuthData);
        const parsedLocalEmail = <string>JSON.parse(localEmail);

        const tokenIsValid =
          new Date().getTime() < parsedLocalAuthData.expirationTime;

        if (tokenIsValid) {
          return actions.authenticationSuccess({
            authData: parsedLocalAuthData,
            email: parsedLocalEmail,
            redirect: false,
          });
        }

        return actions.logOut();
      })
    )
  );

  refreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.refreshToken),
      exhaustMap(({ token }) =>
        this.apiAuthService.refreshToken(token).pipe(
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
            return actions.refreshTokenSuccess({ authData });
          }),
          catchError((error) => of(actions.errorResponse(error)))
        )
      )
    )
  );

  redirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.authenticationSuccess),
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
        ofType(actions.logOut),
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
    private apiAuthService: ApiAuthService,
    private router: Router
  ) {}
}
