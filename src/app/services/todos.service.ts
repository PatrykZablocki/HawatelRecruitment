import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response';
import { Todo } from '../interfaces/todo';

const DEFAULT_API_PATH = 'https://gorest.co.in/public/v1/todos';
const headers = new HttpHeaders().set(
  'Authorization',
  'Bearer 184461723831a89084d73c1abac055905f2f10331d9ca3934d24f6d6aebbf21e'
);
// fetches only pending todos
const params = new HttpParams().set('status', 'pending');

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}
  private todos$: Observable<ApiResponse<Todo>>;

  getTodos(path?: string | null) {
    if (!this.todos$ || path) {
      this.todos$ = this.http
        .get<ApiResponse<Todo>>(path || DEFAULT_API_PATH, {
          params,
          headers,
        })
        // avoids refeching same data
        .pipe(shareReplay(1));
    }

    return this.todos$;
  }
}
