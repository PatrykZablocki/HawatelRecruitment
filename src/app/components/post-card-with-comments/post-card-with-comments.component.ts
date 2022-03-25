import { Component, Input, OnInit } from '@angular/core';
import { PostWithComments } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post-card-with-comments',
  templateUrl: './post-card-with-comments.component.html',
  styleUrls: ['./post-card-with-comments.component.scss'],
})
export class PostCardWithCommentsComponent implements OnInit {
  @Input() post: PostWithComments;

  constructor() {}

  ngOnInit(): void {}
}
