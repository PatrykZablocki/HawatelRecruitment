import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { ApiResponse } from './api-response';
import { Post } from './post';

const DEFAULT_API_PATH = 'https://gorest.co.in/public/v1/posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}
  private posts$: Observable<ApiResponse<Post>>;

  getPosts(path?: string | null) {
    if (!this.posts$ || path) {
      this.posts$ = this.http
        .get<ApiResponse<Post>>(path || DEFAULT_API_PATH)
        // avoids refeching same data
        .pipe(shareReplay(1));
    }

    return this.posts$;
  }
}
