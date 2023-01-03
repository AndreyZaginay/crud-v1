import { Routes } from "@angular/router";

export const PageNotFoundRouting: Routes = [
  {
    path: '**',
    loadComponent: () => import('./not-found.component').then(c => c.NotFoundComponent)
  }
];
