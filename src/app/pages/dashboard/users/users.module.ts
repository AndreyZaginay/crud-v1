import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ComponentsModule } from "../../../shared/components/components.module";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: ':id',
    component: UserComponent
  }
]

@NgModule({
    declarations: [
        UsersComponent,
        UserComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ComponentsModule
    ]
})
export class UsersModule { }
