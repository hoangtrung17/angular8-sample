import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public Service: ApiService
    ) {}

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
      console.log('User added!')
      this.ngZone.run(() => this.router.navigateByUrl('/users'))
    });
  }

}
