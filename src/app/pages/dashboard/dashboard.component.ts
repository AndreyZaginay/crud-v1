import { Component } from '@angular/core';
import { Store } from "@ngrx/store";

import { logout } from "../../core/state/actions/auth.actions";
import { selectEmail } from "../../core/state/selectors/auth.selectors";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userEmail$ = this.store.select(selectEmail);

  constructor(private readonly store: Store) {
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}
