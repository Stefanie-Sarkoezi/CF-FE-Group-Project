import { Component } from '@angular/core';
import { Post } from '../models/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  constructor(private readonly postsService: PostsService) {}

  posts: Post[] = [];

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
  }
}
