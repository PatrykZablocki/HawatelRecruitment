import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable, shareReplay } from 'rxjs';
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
  private posts$: Observable<ApiResponse<Post>> | null;
  test: any;

  // path for next or previous page
  getPosts(path?: string | null): Promise<ApiResponse<Post>> {
    if (!this.posts$ || path) {
      this.posts$ = this.http
        .get<ApiResponse<Post>>(path || DEFAULT_API_PATH, {
          headers,
        })
        // avoids refeching same data
        .pipe(shareReplay(1));
    }

    return lastValueFrom(this.posts$);
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

  // function will fetch all posts for the page and then fetch comments for each post
  getPostsWithComments(path?: string | null) {
    let postsWithComments: ApiResponse<PostWithComments>;
    return this.getPosts(path)
      .then((posts) => {
        postsWithComments = {
          meta: posts.meta,
          data: [],
        };
        // get comments for each posts
        return posts.data.forEach((post, index) => {
          this.getComments(post.id).then((res) => {
            const postWithComments: PostWithComments = {
              ...post,
              comments: res.data,
            };
            postsWithComments.data[index] = postWithComments;
          });
        });
      })
      .then(() => postsWithComments);
  }

  private getComments(postId: number) {
    return lastValueFrom(
      this.http.get<ApiResponse<Comment>>(
        `${DEFAULT_API_PATH}/${postId}/comments`
      )
    );
  }
}
