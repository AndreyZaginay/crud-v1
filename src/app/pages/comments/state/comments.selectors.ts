import { CommentsState } from './comments-state.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const selectComments = createFeatureSelector<CommentsState>('comments');

export const selectCommentList = createSelector(
    selectComments,
    ({ commentList }) => commentList
)

export const selectComment = (commentId: number) => {
    return createSelector(
        selectCommentList,
        commentList => commentList.find(({ id }) => id === commentId)!
    )
}