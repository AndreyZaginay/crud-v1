import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from "./dashboard.routing";
import { SharedModule } from "../../shared";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRouting),
    SharedModule,
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
