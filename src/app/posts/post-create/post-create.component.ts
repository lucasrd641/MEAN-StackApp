import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
})
export class PostCreateComponent implements OnInit {
  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
  });
  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  onAddPost() {
    const newPost = new Post(
      this.postForm.value.title,
      this.postForm.value.content
    );
    this.postService.createPost(newPost);
    this.postForm.reset();
  }
}
