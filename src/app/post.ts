import { Comment } from './comment';

export interface Post {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

export type CreatePostDto = Omit<Post, 'id'>;

export type PostWithComments = Post & {
  comments: Comment[];
};
