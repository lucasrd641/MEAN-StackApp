import { PostService } from './services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  hasPosts = false;
  constructor(private postService: PostService) {}
  ngOnInit(): void {
    this.postService.postChanged.subscribe((posts: Post[]) => {
      posts.length > 0 ? (this.hasPosts = true) : (this.hasPosts = false);
    });
  }
}
