import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './../../shared/shared.module';
import { CommentsComponent } from './comments.component';
import { CommentComponent } from './comment/comment.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
   path: '',
   component: CommentsComponent 
  },
  {
    path: ':id',
    component: CommentComponent
  }
]

@NgModule({
    declarations: [
        CommentsComponent,
        CommentComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class CommentsModule { }
