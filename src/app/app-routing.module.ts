import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes, UrlSegment } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.routing').then(p => p.AuthRouting),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
