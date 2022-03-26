import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable, shareReplay, Subject } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response';
import { CreateUserDto, User } from '../interfaces/user';

const DEFAULT_API_PATH = 'https://gorest.co.in/public/v1/users';
const headers = new HttpHeaders().set(
  'Authorization',
  'Bearer 184461723831a89084d73c1abac055905f2f10331d9ca3934d24f6d6aebbf21e'
);

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  private usersSubject$ = new Subject<ApiResponse<User>>();
  usersObs$ = this.usersSubject$.asObservable().pipe(shareReplay(1));
  private firstFetch: boolean = true;

  // path for next or previous page
  getUsers(path?: string | null) {
    if (this.firstFetch || path) {
      this.fetchUsers(path).then((res) => this.usersSubject$.next(res));
      this.firstFetch = false;
    }
  }

  // it forces fetching data with next invoke of getUsers()
  invalidateUsersData() {
    this.firstFetch = true;
  }

  addUser(user: CreateUserDto) {
    const request = this.http.post(DEFAULT_API_PATH, user, {
      headers,
    });

    return firstValueFrom(request);
  }

  private fetchUsers(path?: string | null) {
    const request = this.http.get<ApiResponse<User>>(path || DEFAULT_API_PATH, {
      headers,
    });

    return firstValueFrom(request);
  }
}
