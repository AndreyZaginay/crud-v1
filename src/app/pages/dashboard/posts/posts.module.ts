import { PostsComponent } from './posts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { ComponentsModule } from "../../../shared/components/components.module";

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: ':id',
    component: PostComponent
  }
]

@NgModule({
    declarations: [
        PostComponent,
        PostsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ComponentsModule
    ]
})
export class PostsModule { }
