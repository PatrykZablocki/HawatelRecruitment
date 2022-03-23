import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { ApiResponse } from './api-response';
import { Todo } from './todo';

const DEFAULT_API_PATH = 'https://gorest.co.in/public/v1/todos?page=1';

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
          // fetches only pending todos
          params: { status: 'pending' },
        })
        // avoids refeching same data
        .pipe(shareReplay(1));
    }

    return this.todos$;
  }
}
