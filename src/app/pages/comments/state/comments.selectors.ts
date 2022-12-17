import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { commentsFeature } from './comments.reducer'


// export const selectCommentList = createSelector(
//     commentsFeature.selectCommentList,
//     ( commentList  => commentList) 
// );

// export const selectPostComments = (postId: number) => {
//     return createSelector(commentsFeature.selectCommentList, commentList => commentList.filter(comment => comment.postId === postId))
// }