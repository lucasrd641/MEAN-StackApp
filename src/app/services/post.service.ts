import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[] = [];
  postChanged = new Subject<Post[]>();
  constructor() {}

  getPosts() {
    return this.posts.slice();
  }
  createPost(post: Post) {
    this.posts.push(post);
    this.postChanged.next(this.posts);
  }
  deletePost(postToDelete: Post) {
    this.posts.splice(
      this.posts.findIndex((post) => post == postToDelete),
      1
    );
    this.postChanged.next(this.posts);
  }
}
