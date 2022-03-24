import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { ApiResponse } from './api-response';
import { CreatePostDto, Post } from './post';

const DEFAULT_API_PATH = 'https://gorest.co.in/public/v1/posts';
const headers = new HttpHeaders().set(
  'Authorization',
  'Bearer 184461723831a89084d73c1abac055905f2f10331d9ca3934d24f6d6aebbf21e'
);

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}
  private posts$: Observable<ApiResponse<Post>> | null;

  getPosts(path?: string | null) {
    if (!this.posts$ || path) {
      this.posts$ = this.http
        .get<ApiResponse<Post>>(path || DEFAULT_API_PATH, {
          headers,
        })
        // avoids refeching same data
        .pipe(shareReplay(1));
    }

    return this.posts$;
  }

  // it forces fetching data with next invoke of getUsers()
  invalidatePostsData() {
    this.posts$ = null;
  }

  addPost(post: CreatePostDto) {
    return this.http.post(DEFAULT_API_PATH, post, {
      headers,
    });
  }
}
