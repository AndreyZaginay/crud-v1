import { createAction, props } from '@ngrx/store';
import { Comment } from '../entities/comment'

export const getCommentsActions = createAction('[COMMENTS] get comments');
export const getCommentsActionsSuccess = createAction('[COMMENTS] get comments success', props<{ commentList: Comment[] }>());
