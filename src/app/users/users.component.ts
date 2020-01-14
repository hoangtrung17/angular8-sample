import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any = [];


  ngOnInit() {
    this.loadUsers();
  }

  constructor(
    public Service: ApiService
  ) { }

  // Users list
  loadUsers() {
    return this.Service.GetUsers().subscribe((data: {}) => {
      this.users = data;
    })
  }

  // Delete issue
  deleteUser(data) {
    var index = index = this.users.map(x => { return x.issue_name }).indexOf(data.issue_name);
    return this.Service.DeleteUser(data.id).subscribe(res => {
      this.users.splice(index, 1)
      console.log('Issue deleted!')
    })
  }

}
