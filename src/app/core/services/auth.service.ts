import { Injectable } from '@angular/core';
import { of, Observable } from "rxjs";

@Injectable()
export class AuthService {

  constructor() {
  }

  login(email: string, password: string): Observable<string> {
    return of(email);
  }

  register(email: string, password: string): Observable<string> {
    return of(email);
  }

  logout(): Observable<string> {
    return of('');
  }
}
