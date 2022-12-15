import { createReducer, on } from '@ngrx/store';
import { UsersState } from './users-state.interface';
import * as UsersActions from './users.actions';

export const usersState: UsersState = {
    users: []
}

export const usersReducers = createReducer(
    usersState,
    on(UsersActions.getUsersActionsSuccess, (state, { users }) => ({
        ...state,
        users: users 
    })),
)
