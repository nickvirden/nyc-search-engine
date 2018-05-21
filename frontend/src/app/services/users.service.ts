import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../types/user';

@Injectable()
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<User[]>('/api/users');
  }

  getUser(userId) {
    return this.httpClient.get(`/api/users/${userId}`);
  }

  addNewUser(user: User) {
    return this.httpClient.post<User>('/api/users', user);
  }

  updateUser(userId, user: User) {
    return this.httpClient.patch(`/api/users/${userId}`, user);
  }

  deleteUser(userId: string) {
    return this.httpClient.delete(`/api/users/${userId}`);
  }

}
