import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { usersReducers } from '../../pages/dashboard/users/state/users.reducer';
import { UsersEffects } from 'src/app/pages/dashboard/users/state/users.effects';
import { postsReducers } from 'src/app/pages/dashboard/posts/state/posts.reducer';
import { PostsEffects } from 'src/app/pages/dashboard/posts/state/posts.effects';
import { commentsReducer } from 'src/app/pages/dashboard/comments/state/comments.reducer';
import { CommentsEffects } from 'src/app/pages/dashboard/comments/state/comments.effects';
import { authReducer } from "./resudcers/auth.reducer";
import { AuthEffects } from "./effects/auth.effects";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ users: usersReducers, posts: postsReducers, comments: commentsReducer, auth: authReducer }),
    EffectsModule.forRoot([ UsersEffects, PostsEffects, CommentsEffects, AuthEffects ]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ]
})
export class StateModule {
}
