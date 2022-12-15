import { AppState } from './../../../core/state/state.interface';
import {  createSelector } from '@ngrx/store';

export const selectUsers = (state: AppState) => state.users.users;

export const selectPostList = (state: AppState) => state.posts.posts;

export const selectPosts = (id: number) => {
    return createSelector(
        selectPostList,
        (posts) => posts.filter(({ userId }) => userId === id)
    )
}
