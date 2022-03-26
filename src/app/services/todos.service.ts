import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable, shareReplay, Subject } from 'rxjs';
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

  private todosSubject$ = new Subject<ApiResponse<Todo>>();
  todosObs$ = this.todosSubject$.asObservable().pipe(shareReplay(1));
  private firstFetch: boolean = true;

  getTodos(path?: string | null) {
    if (this.firstFetch || path) {
      this.fetchTodos(path)
        .then(this.transformTodosResponse)
        .then((res) => this.todosSubject$.next(res));
      this.firstFetch = false;
    }
  }

  private fetchTodos(path?: string | null) {
    const request = this.http.get<ApiResponse<Todo>>(path || DEFAULT_API_PATH, {
      params,
      headers,
    });

    return firstValueFrom(request);
  }

  // transforms date
  private transformTodosResponse(
    response: ApiResponse<Todo>
  ): ApiResponse<Todo> {
    return {
      ...response,
      data: response.data.map((todo) => ({
        ...todo,
        due_on: new Date(todo.due_on).toLocaleDateString(),
      })),
    };
  }
}
