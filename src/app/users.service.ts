import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { ApiResponse } from './api-response';
import { User } from './user';

const DEFAULT_API_PATH = 'https://gorest.co.in/public/v1/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  private users$: Observable<ApiResponse<User>>;

  getUsers(path?: string | null) {
    if (!this.users$ || path) {
      this.users$ = this.http
        .get<ApiResponse<User>>(path || DEFAULT_API_PATH)
        // avoids refeching same data
        .pipe(shareReplay(1));
    }

    return this.users$;
  }
}
