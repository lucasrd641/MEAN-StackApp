import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.postService.postChanged.subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }
  onDeletePost(post: Post) {
    this.postService.deletePost(post);
  }
  //   onEditPost(post: Post) {
  //     this.postService.editPost(post);
  //   }
}
