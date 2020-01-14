import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { ContactComponent } from './contact/contact.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],

  declarations: []
})
export class AppRoutingModule { }
