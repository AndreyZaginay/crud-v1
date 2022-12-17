import {  createFeatureSelector, createSelector } from '@ngrx/store';

import { PostsState } from './../../posts/state/posts-state.interface';
import { UsersState } from './users-state.interface';

export const selectUsersState = createFeatureSelector<UsersState>('users');

export const selectUserList = createSelector(
    selectUsersState,
    ({ userList }) => userList
)

export const selectUser = (userId: number) => {
    return createSelector(
        selectUserList,
        userList => userList.find(({ id }) => id === userId)!
    )
}

export const selectPosts = createFeatureSelector<PostsState>('posts')

export const selectPostsList = createSelector(
    selectPosts,
    ({ postList }) => postList
)



export const selectUserPostList = (id: number) => {
    return createSelector(
        selectPosts,
        ({ postList }) => postList.filter(({ userId }) => userId === id)
    )
}
