import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from "angular-notifier";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  postForm: FormGroup;
  users: any = [];
  notifier: NotifierService;
  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public Service: ApiService,
    notifierService: NotifierService,
    private route: ActivatedRoute
  ) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.addPost();
    this.loadUsers();
    this.getPost(this.route.snapshot.params.id);
  }

  addPost() {
    this.postForm = this.fb.group({
      author: [''],
      title: [''],
      image: [''],
      body: ['']
    })
  }

  // Get post
  getPost(id) {
    return this.Service.GetPost(id).subscribe((data: {}) => {
      this.postForm = this.fb.group(data);
    })
  }

   // Users list
   loadUsers() {
    return this.Service.GetUsers().subscribe((data: {}) => {
      this.users = data;
    })
  }

  submitForm() {
    this.Service.UpdatePosts(this.postForm.value).subscribe(res => {
      this.notifier.notify("success", "Add new user success!");
      this.ngZone.run(() => this.router.navigateByUrl('/posts'))
    });
  }
}
