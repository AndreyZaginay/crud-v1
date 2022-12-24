import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  authForm!: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
    ) {}

  ngOnInit(): void {
    this.innitAuthForm()
  }

  public submitAuthForm(): void {
    if (this.authForm.invalid) {
      return
    }
    this.authService.logIn();
    this.router.navigate(['auth/profile'])
  }

  private innitAuthForm(): void {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required)
    })
  }
}
