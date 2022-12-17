import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';

import * as CommentsActions from './comments.actions';
import { CommentsService } from '../services/comments.service';
import { Comment } from '../entities/comment'


@Injectable()
export class CommentsEffects {
    getComments$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CommentsActions.getCommentsActions),
            switchMap(() => this.commentsSecvice.getComments().pipe(
                map((commentList: Comment[]) => CommentsActions.getCommentsActionsSuccess({ commentList }))
            ))
        )
    })

    constructor(
        private readonly actions$: Actions,
        private readonly commentsSecvice: CommentsService
    ){}
}