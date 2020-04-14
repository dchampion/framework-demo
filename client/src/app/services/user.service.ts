﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>('/users');
  }

  register(user: User) {
    return this.http.post('users/register', user, {responseType: 'text'});
  }

  delete(user: User) {
    return this.http.delete(`users/${user.username}`);
  }
}
