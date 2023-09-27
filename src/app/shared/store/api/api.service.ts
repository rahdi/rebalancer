import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { LoginPayload, LoginResponse, RefreshTokenResponse } from './api.types';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  login({ email, password }: LoginPayload) {
    return this.http.post<LoginResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
  }

  refreshToken(token: string) {
    return this.http.post<RefreshTokenResponse>(
      `https://securetoken.googleapis.com/v1/token?key=${environment.firebase.apiKey}`,
      { grant_type: 'refresh_token', refresh_token: token }
    );
  }
}
