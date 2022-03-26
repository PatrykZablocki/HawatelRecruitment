import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  post = {
    body: '',
    title: '',
    user_id: '',
  };
  disableFormFields: boolean;
  // object with info for response p tag
  response: {
    msg: string;
    type: 'success' | 'error';
  };

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {}

  onSubmit(e: SubmitEvent) {
    e.preventDefault;
    this.disableFormFields = true;
    this.postsService
      .addPost({ ...this.post, user_id: +this.post.user_id })
      .then(() => {
        this.response = {
          msg: `Post was added.`,
          type: 'success',
        };
        this.postsService.invalidatePostsData();
      })
      .catch((err) => {
        console.error(err);
        this.response = {
          msg: `Failed to add post (${err.statusText})`,
          type: 'error',
        };
      })
      .finally(() => {
        this.disableFormFields = false;
      });
  }
}
