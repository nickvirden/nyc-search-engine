import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../types/user';

@Injectable()
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  addNewUser(user: User) {
    return this.httpClient.post<User>(
      '/api/users',
      user
    );
  }

  getUsers() {
    return this.httpClient.get<User[]>('/api/users');
  }

  getUser(userId) {
    return this.httpClient.get<User>('/api/users/${userId}');
  }

  deleteUser(userId: string) {
    return this.httpClient.delete(`/api/users/${userId}`);
  }

}
