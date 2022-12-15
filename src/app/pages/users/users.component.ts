import { getUsersActions } from './state/users.actions';
import { AppState } from './../../core/state/state.interface';
import { selectUsers } from './state/users.selectors';
import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';
import { User } from './entities/user';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users$: Observable<User[]> = this.store.select(selectUsers)

  constructor (private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getUsersActions())
  }

  

}
