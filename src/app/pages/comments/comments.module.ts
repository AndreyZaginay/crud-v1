import { CommentsComponent } from './comments.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CommentComponent } from './comment/comment.component';

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
    RouterModule.forChild(routes)
  ]
})
export class CommentsModule { }
