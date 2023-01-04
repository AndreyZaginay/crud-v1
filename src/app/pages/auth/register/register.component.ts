import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import {  register } from "../../../core/state/actions/auth.actions";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule ]
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl('', [ Validators.required ]),
    password: new FormControl('', [ Validators.required ]),
  });

  constructor(private readonly store: Store) {
  }

  submitRegisterForm(): void {
    if (this.registerForm.invalid) {
      return;
    }
    const { email, password } = this.registerForm.getRawValue();
    this.store.dispatch(register({ credentials: { email: email ?? 'test@mail.com', password: password ?? 'test1234' } }));
  }
}
