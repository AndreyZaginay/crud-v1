import {  createFeatureSelector, createSelector } from '@ngrx/store';
import { selectPosts } from '../../posts/state/posts.selectors';

import { UsersState } from './users-state.interface';

export const selectUsersState = createFeatureSelector<UsersState>('users');

export const selectUserList = createSelector(
    selectUsersState,
    ({ userList }) => [...userList].sort((a, b) => a.id - b.id)
)

export const selectUser = (userId: number) => {
    return createSelector(
        selectUserList,
        userList => userList.find(({ id }) => id === userId)!
    )
}

export const selectUserListByGreatestId = createSelector(
    selectUserList,
    userList => [...userList].sort((a, b) => b.id - a.id)
)

export const filterByInputValue = (value: string) => {
    return createSelector(
        selectUserList,
        userList => userList.filter(({ name }) => name.toLowerCase().includes(value.toLowerCase().trim()))
    )
}

export const selectUserPostList = (id: number) => {
    return createSelector(
        selectPosts,
        ({ postList }) => postList.filter(({ userId }) => userId === id)
    )
}
