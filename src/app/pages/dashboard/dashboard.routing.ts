import { Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";

export const DashboardRouting: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'posts',
        loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
      },
      {
        path: 'comments',
        loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule)
      },
    ]
  }
];
