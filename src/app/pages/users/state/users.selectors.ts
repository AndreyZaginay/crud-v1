import { PostsState } from './../../posts/state/posts-state.interface';
import { AppState } from './../../../core/state/state.interface';
import {  createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './users-state.interface';

export const selectUsersState = createFeatureSelector<UsersState>('users');

export const selectUserList = createSelector(
    selectUsersState,
    ({ userList }) => userList
)

export const selectPosts = createFeatureSelector<PostsState>('posts')

export const selectPostsList = (id: number) => {
    return createSelector(
        selectPosts,
        ({ postList }) => postList.filter(({ userId }) => userId === id)
    )
}
