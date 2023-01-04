import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateModule } from "./state";
import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StateModule,
  ],
  providers: [AuthService],
  exports: [StateModule]
})
export class CoreModule { }
