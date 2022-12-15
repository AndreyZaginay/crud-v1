import { USERS_API } from './../tokens/users.api';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly http: HttpClient, @Inject(USERS_API) private readonly api: string) { }

  public getUsers(): Observable<User[]> {
    return  this.http.get<User[]>(this.api)
  }
}
