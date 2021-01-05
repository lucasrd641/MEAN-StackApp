import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[] = [
    { title: 'Teste 1', content: 'Esse é o Primeiro Teste' },
    { title: 'Teste 2', content: 'Esse é o Segundo Teste' },
    { title: 'Teste 3', content: 'Esse é o Terceiro Teste' },
  ];
  postChanged = new Subject<Post[]>();
  constructor() {}
  // getPostsListener() {
  //   this.postChanged.asObservable();
  // }
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
