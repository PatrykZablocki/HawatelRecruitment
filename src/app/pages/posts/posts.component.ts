import { Component, OnInit } from '@angular/core';
import { MetaPagination } from 'src/app/interfaces/meta-pagination';
import { PostWithComments } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: PostWithComments[];
  pagination: MetaPagination;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData = (page?: string | null) => {
    this.postsService.getPostsWithComments(page).then(({ data, meta }) => {
      this.posts = data;
      this.pagination = meta.pagination;
    });
  };
}
