import { UsersService } from '../services/users.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UsersActions from './users.actions';
import { map, mergeMap, switchMap } from 'rxjs';
import { User } from '../entities/user';

@Injectable()
export class UsersEffects {
  getUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.getUsersActions),
      switchMap(() => this.usersService.getUsers().pipe(
        map((userList: User[]) => UsersActions.getUsersActionsSuccess({ userList }))
      ))
    );
  })

  constructor(private actions$: Actions, private readonly usersService: UsersService) {}
}