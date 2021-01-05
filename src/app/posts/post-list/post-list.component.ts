import { PostService } from './../../services/post.service';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit, OnDestroy {
  @ViewChild('postAnimate') postAnimate: ElementRef;
  postSub: Subscription;
  posts: Post[];
  constructor(private postService: PostService) {}
  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.postSub = this.postService.postChanged.subscribe((posts: Post[]) => {
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
