import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { getUsersActions } from './state/users.actions';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './entities/user';
import { selectUserList } from './state/users.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users$: Observable<User[]> = this.store.select(selectUserList);
  colums: string[] = ['id', 'name', 'username', 'email', 'phone'];
  route: string = 'users';

  constructor (
    private readonly store: Store,
    private readonly router: Router
    ) {}

  ngOnInit(): void {
    this.store.dispatch(getUsersActions());
  }
}
