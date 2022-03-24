import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, Subject, tap } from 'rxjs';
import { ApiResponse } from './api-response';
import { CreateUserDto, User } from './user';

const DEFAULT_API_PATH = 'https://gorest.co.in/public/v1/users';
const API_HEADERS = {
  Authorization:
    'Bearer 184461723831a89084d73c1abac055905f2f10331d9ca3934d24f6d6aebbf21e',
};

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  private users$: Observable<ApiResponse<User>> | null;

  // path for next or previous page
  getUsers(path?: string | null) {
    if (!this.users$ || path) {
      this.users$ = this.http
        .get<ApiResponse<User>>(path || DEFAULT_API_PATH, {
          headers: API_HEADERS,
        })
        // avoids refeching same data
        .pipe(shareReplay(1));
    }

    return this.users$;
  }

  // it forces fetching data with next invoke of getUsers()
  invalidateUsersData() {
    this.users$ = null;
  }

  postUser(user: CreateUserDto) {
    return this.http.post(DEFAULT_API_PATH, user, {
      headers: API_HEADERS,
    });
  }
}
