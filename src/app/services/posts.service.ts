import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, shareReplay, Subject } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response';
import { Comment } from '../interfaces/comment';
import { CreatePostDto, Post, PostWithComments } from '../interfaces/post';

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

  private postsSubject$ = new Subject<ApiResponse<PostWithComments>>();
  postsObs$ = this.postsSubject$.asObservable().pipe(shareReplay(1));
  private firstFetch: boolean = true;

  addPost(post: CreatePostDto) {
    const request = this.http.post(DEFAULT_API_PATH, post, {
      headers,
    });

    return firstValueFrom(request);
  }

  getPostsWithComments(path?: string | null) {
    if (this.firstFetch || path) {
      this.fetchPostsWithComments(path);
      this.firstFetch = false;
    }
  }

  // it forces fetching data with next invoke of getPostsWithComments()
  invalidatePostsData() {
    this.firstFetch = true;
  }

  private fetchPostsWithComments(path?: string | null) {
    let result: ApiResponse<PostWithComments>;

    // fetch posts
    this.fetchPosts(path).then(({ meta, data }) => {
      result = {
        meta: meta,
        data: data.map((post): PostWithComments => ({ ...post, comments: [] })),
      };
      this.postsSubject$.next(result);

      // fetch comments for each post
      data.forEach((post, index) => {
        this.fetchComments(post.id).then(
          (comments) => (result.data[index].comments = comments.data)
        );
        this.postsSubject$.next(result);
      });
    });
  }

  private fetchPosts(path?: string | null) {
    const request = this.http.get<ApiResponse<Post>>(path || DEFAULT_API_PATH, {
      headers,
    });

    return firstValueFrom(request);
  }

  private fetchComments(postId: number) {
    const request = this.http.get<ApiResponse<Comment>>(
      `${DEFAULT_API_PATH}/${postId}/comments`
    );

    return firstValueFrom(request);
  }
}
