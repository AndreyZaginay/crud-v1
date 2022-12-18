import { PostsState } from './posts-state.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectCommentList } from '../../comments/state/comments.selectors';

export const selectPosts = createFeatureSelector<PostsState>('posts')

export const selectPostsList = createSelector(
    selectPosts,
    ({ postList }) => postList
) 

export const selectPost = (postId: number) => {
    return createSelector(
        selectPostsList,
        postList => postList.find(({ id }) => id === postId)!
    )
}

export const selectPostComments = (id: number) => {
    return createSelector(
        selectCommentList,
        commentList => commentList.filter(({ postId }) => postId === id)
    )
}
