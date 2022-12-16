import { getUsersActions } from './state/users.actions';
import { AppState } from './../../core/state/state.interface';
import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';
import { User } from './entities/user';
import { Store } from '@ngrx/store';
import { selectUserList } from './state/users.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users$: Observable<User[]> = this.store.select(selectUserList)

  constructor (private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getUsersActions())
  }

  public fullInfo(): void {
    
  }
}
