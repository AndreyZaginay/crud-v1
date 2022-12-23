import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
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
    this.router.navigate(['users'])
  }

  private innitAuthForm(): void {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required)
    })
  }

}
