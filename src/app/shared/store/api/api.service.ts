import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { LoginResponse } from './api.types';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<LoginResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
  }
}
