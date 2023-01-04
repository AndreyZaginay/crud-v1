import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, tap } from "rxjs";
import { Router } from "@angular/router";

import { AuthService } from "../../services/auth.service";
import * as AuthActions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.login),
    mergeMap(({ credentials }) => this.authService.login(credentials.email, credentials.password)),
    map(email => AuthActions.loginSuccessful({ email })),
    tap(() => this.router.navigate(['']))
  ));

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.logout),
    mergeMap(() => this.authService.logout()),
    map(() => AuthActions.logoutSuccessful()),
    tap(() => this.router.navigate(['auth'])),
  ));

  register = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.register),
    mergeMap(({ credentials }) => this.authService.register(credentials.email, credentials.password)),
    map(email => AuthActions.registerSuccessful({ email })),
    tap(() => this.router.navigate([''])),
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}
}
