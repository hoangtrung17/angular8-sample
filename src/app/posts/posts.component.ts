import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NotifierService } from "angular-notifier";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any = [];
  notifier: NotifierService;
  constructor(
    public Service: ApiService,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.loadPosts();
  }

  // Load list post
  loadPosts() {
    return this.Service.GetPosts().subscribe((data: {}) => {
      this.posts = data;
    })
  }
}
