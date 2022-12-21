import { PostsState } from './posts-state.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectCommentList } from '../../comments/state/comments.selectors';

export const selectPosts = createFeatureSelector<PostsState>('posts')

export const selectPostsList = createSelector(
    selectPosts,
    ({ postList }) => [...postList].sort((a, b) => a.id - b.id)
) 

export const selectPostListByGreatestId = createSelector(
    selectPostsList,
    postList => [...postList].sort((a, b) => b.id - a.id)
)

export const filterByOddId = createSelector(
    selectPostsList,
    postList => postList.filter(({ id }) => id % 2 === 0)
)

export const filterByEvenId = createSelector(
    selectPostsList,
    postList => postList.filter(({ id }) => id % 2 !== 0)
)

export const sortByTitleLength = createSelector(
    selectPostsList,
    postList => [...postList].sort((a, b) => a.title.split('').length - b.title.split('').length)
)

export const filterByInputValue = (value: string) => {
    return createSelector(
        selectPostsList,
        postList => postList.filter(({ title }) => title.toLowerCase().includes(value.toLowerCase().trim()))
    )
}

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
