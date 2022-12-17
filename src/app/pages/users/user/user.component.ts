import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../entities/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user$!: Observable<User>

  constructor(
    private readonly store: Store,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    
  }

}
