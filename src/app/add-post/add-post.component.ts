import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from "angular-notifier";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;
  users: any = [];
  notifier: NotifierService;
  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public Service: ApiService,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.addPost();
    this.loadUsers();
  }

  addPost() {
    this.postForm = this.fb.group({
      author: [''],
      title: [''],
      image: [''],
      body: ['']
    })
  }

  // Users list
  loadUsers() {
    return this.Service.GetUsers().subscribe((data: {}) => {
      this.users = data;
    })
  }

  submitForm() {
    this.Service.CreatePosts(this.postForm.value).subscribe(res => {
      this.notifier.notify("success", "Add new user success!");
      this.ngZone.run(() => this.router.navigateByUrl('/posts'))
    });
  }
}
