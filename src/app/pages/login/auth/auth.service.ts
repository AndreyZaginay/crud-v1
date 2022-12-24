import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth: boolean = false;

  get isLoggedIn(): boolean{
    return this.isAuth
  }

  constructor() { }

  public logIn(): void {
    this.isAuth = true;
  }

  public logOut(): void {
    this.isAuth = false;
  }

}
