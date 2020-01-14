import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from "angular-notifier";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
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
    this.addUser()
  }

  addUser() {
    this.userForm = this.fb.group({
      userName: [''],
      email: [''],
      phone: ['']
    })
  }

  submitForm() {
    this.Service.CreateUser(this.userForm.value).subscribe(res => {
      this.notifier.notify("success", "Add new user success!");
      this.ngZone.run(() => this.router.navigateByUrl('/users'))
    });
  }
}
