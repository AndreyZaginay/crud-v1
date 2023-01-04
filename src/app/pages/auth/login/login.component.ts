import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { login } from "../../../core/state/actions/auth.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ],
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule ]
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [ Validators.required ]),
    password: new FormControl('', [ Validators.required ]),
  });

  constructor(private readonly store: Store) {
  }

  submitLoginForm(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const { email, password } = this.loginForm.getRawValue();
    this.store.dispatch(login({ credentials: { email: email ?? 'test@mail.com', password: password ?? 'test1234' } }));
  }
}
