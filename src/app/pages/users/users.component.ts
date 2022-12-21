import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { getUsersActions } from './state/users.actions';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './entities/user';
import { filterByInputValue, selectUserList, selectUserListByGreatestId } from './state/users.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users$: Observable<User[]> = this.store.select(selectUserList);
  colums: string[] = ['id', 'name', 'username', 'email', 'phone'];
  routeList: string = 'users';

  constructor (
    private readonly store: Store,
    ) {}

  ngOnInit(): void {
    this.store.dispatch(getUsersActions());
  }

  public sortByGreatestId(): void {
    this.users$ = this.store.select(selectUserListByGreatestId) 
  }

  public sortByLesstId(): void {
    this.users$ = this.store.select(selectUserList) 
  }

  public filterByInputValue(value: string): void {
    this.users$ = this.store.select(filterByInputValue(value))
  }

}
