import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'YOUR_API_KEY';
  localUrl = "http://localhost:3300/"

  constructor(private http: HttpClient) {
  }
  getPost() {
    return this.http.get(this.localUrl + 'post');
  }
  getComments() {
    return this.http.get(this.localUrl + 'comments');
  }

  getUsers() {
    return this.http.get(this.localUrl + 'users');
  }
}
