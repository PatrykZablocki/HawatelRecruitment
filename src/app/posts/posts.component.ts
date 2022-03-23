import { Component, OnInit } from '@angular/core';
import { MetaPagination } from '../meta-pagination';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  pagination: MetaPagination;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData = (page?: string | null) => {
    this.postsService.getPosts(page).subscribe(({ data, meta }) => {
      this.posts = data;
      this.pagination = meta.pagination;
    });
  };
}
