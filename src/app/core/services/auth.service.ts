import { Injectable } from '@angular/core';
import { delay, EMPTY, of, Observable } from "rxjs";

@Injectable()
export class AuthService {

  constructor() {
  }

  login(email: string, password: string): Observable<string> {
    return of(email).pipe(delay(1000));
  }

  register(email: string, password: string): Observable<string> {
    return of(email).pipe(delay(1000));
  }

  logout(): Observable<never> {
    return EMPTY.pipe(delay(1000));
  }
}
