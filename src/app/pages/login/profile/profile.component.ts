import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
    ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logOut();
    this.router.navigate(['auth'])
  }
}
