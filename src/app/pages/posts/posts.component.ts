import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MetaPagination } from 'src/app/interfaces/meta-pagination';
import { PostWithComments } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: PostWithComments[];
  pagination: MetaPagination;
  subscription$: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.subscription$ = this.postsService.postsObs$.subscribe(
      ({ meta, data }) => {
        this.pagination = meta.pagination;
        this.posts = data;
      }
    );
    this.getData();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  getData = (path?: string | null) => {
    this.postsService.getPostsWithComments(path);
  };
}
