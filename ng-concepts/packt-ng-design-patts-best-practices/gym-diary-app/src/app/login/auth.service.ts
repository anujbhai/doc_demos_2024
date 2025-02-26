import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { LoginForm, Token } from '../diary/interfaces/auth';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private httpClient = inject(HttpClient);
  private url = 'auth/login';
  #token?: Token;

  constructor() { }

  login(loginForm: Partial<LoginForm>): Observable<Token> {
    return this.httpClient
      .post<Token>(this.url, loginForm)
      .pipe(tap((token) => (this.#token = token)));
  }

  get isLogged() {
    return this.#token ? true : false;
  }

  logout() {
    this.#token = undefined;
  }

  get token() {
    return this.#token?.access_token;
  }
}
