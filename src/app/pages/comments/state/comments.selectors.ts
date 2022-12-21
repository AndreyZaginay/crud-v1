import { CommentsState } from './comments-state.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const selectComments = createFeatureSelector<CommentsState>('comments');

export const selectCommentList = createSelector(
    selectComments,
    ({ commentList }) => [...commentList].sort((a, b) => a.id - b.id)
)

export const slectByGreatestId = createSelector(
    selectCommentList,
    commentList => [...commentList].sort((a, b) => b.id - a.id)
)

export const sortByNameLength = createSelector(
    selectCommentList,
    commentList => [...commentList].sort((a, b) => a.name.split('').length - b.name.split('').length)
)

export const filterByInputValue = (value: string) => {
    return createSelector(
        selectCommentList,
        commentList => commentList.filter(({ name }) => name.toLowerCase().includes(value))
    )
}

export const selectComment = (commentId: number) => {
    return createSelector(
        selectCommentList,
        commentList => commentList.find(({ id }) => id === commentId)!
    )
}