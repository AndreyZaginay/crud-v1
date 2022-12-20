import { SharedModule } from './../../shared/shared.module';
import { CommentsComponent } from './comments.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { ComponentsModule } from "../../shared/components/components.module";

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
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class CommentsModule { }
