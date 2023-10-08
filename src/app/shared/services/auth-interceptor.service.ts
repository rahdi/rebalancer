import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpParams,
} from '@angular/common/http';
import { Observable, exhaustMap, map, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'app.store';
import { sharedStore } from '../store';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select(sharedStore.selectors.apiAuth.selectAuthData).pipe(
      take(1),
      map((rawAuthData) => ({
        uid: rawAuthData?.userId,
        token: rawAuthData?.token,
      })),
      exhaustMap((authData) => {
        if (!authData.token || !authData.uid) return next.handle(req);

        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', authData.token),
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
