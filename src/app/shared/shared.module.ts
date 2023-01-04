import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";

import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ComponentsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
  ]
})
export class SharedModule {
}
