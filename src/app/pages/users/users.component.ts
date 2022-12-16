import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { getUsersActions } from './state/users.actions';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './entities/user';
import { selectUserList, selectPostsList } from './state/users.selectors';
import { Post } from '../posts/entities/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users$: Observable<User[]> = this.store.select(selectUserList);

  constructor (
    private readonly store: Store,
    private readonly router: Router
    ) {}

  ngOnInit(): void {
    this.store.dispatch(getUsersActions());
  }

  public fullInfo(userId: number): void {
    this.router.navigate([`/${userId}`])
  }
}
