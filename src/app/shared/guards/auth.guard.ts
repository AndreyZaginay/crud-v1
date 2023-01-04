import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Store } from "@ngrx/store";

import { selectLoggedIn } from "../../core/state/selectors/auth.selectors";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private readonly store: Store, private readonly router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(selectLoggedIn).pipe(
      tap(loggedIn => {
        if (!loggedIn) {
          this.router.navigate(['auth']);
        }
      })
    );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(selectLoggedIn).pipe(
      tap(loggedIn => {
        if (!loggedIn) {
          this.router.navigate(['auth']);
        }
      })
    );
  }
}
