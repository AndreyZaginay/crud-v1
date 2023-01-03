import { CommentsState } from './comments-state.interface';
import { createReducer, on, } from '@ngrx/store';
import * as CommentsActions from './comments.actions'


export const commentsState: CommentsState = {
    commentList: [],
}

export const commentsReducer = createReducer(
    commentsState,
    on(CommentsActions.getCommentsActionsSuccess, (state , { commentList }) => ({
        ...state, commentList: commentList
    }))
)
