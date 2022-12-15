
import { createAction, props } from '@ngrx/store';
import { User } from '../entities/user';

export const getUsersActions = createAction('[USERS] get users list');
export const getUsersActionsSuccess = createAction('[USERS] get users list success', props<{ users: User[] }>());
