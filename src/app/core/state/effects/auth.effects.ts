import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../../services/auth.service";
import * as AuthActions from '../actions/auth.actions';
import { catchError, map, mergeMap } from "rxjs";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.login),
    mergeMap(({ credentials }) => this.authService.login(credentials.email, credentials.password)),
    map(email => AuthActions.loginSuccessful({ email })),
  ));

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logout),
    mergeMap(() => this.authService.logout()),
    map(() => AuthActions.logoutSuccessful()),
  ));

  register = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.register),
    mergeMap(({ credentials }) => this.authService.register(credentials.email, credentials.password)),
    map(email => AuthActions.registerSuccessful({ email })),
  ));

  constructor(private readonly actions$: Actions, private readonly authService: AuthService) {
  }
}
