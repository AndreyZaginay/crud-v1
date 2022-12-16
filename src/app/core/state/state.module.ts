import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { usersReducers } from './../../pages/users/state/users.reducer';
import { UsersEffects } from 'src/app/pages/users/state/users.effects';
import { postsReducers } from 'src/app/pages/posts/state/posts.reducer';
import { PostsEffects } from 'src/app/pages/posts/state/posts.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({users: usersReducers, posts: postsReducers}),
    EffectsModule.forRoot([UsersEffects, PostsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ]
})
export class StateModule { }
