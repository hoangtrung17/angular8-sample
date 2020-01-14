import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Post } from '../model/post';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'YOUR_API_KEY';
  baseurl = "http://localhost:3300"

  constructor(private http: HttpClient) {
  }
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // POST
  CreateUser(data): Observable<User> {
    return this.http.post<User>(this.baseurl + '/users/', JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // GET
  GetUser(id): Observable<User> {
    return this.http.get<User>(this.baseurl + '/users/' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // GET
  GetUsers(): Observable<User> {
    return this.http.get<User>(this.baseurl + '/users')
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  //Delete
  DeleteUser(id){
    return this.http.delete<User>(this.baseurl + '/users/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  // GET
  GetPosts(id): Observable<Post> {
    return this.http.get<Post>(this.baseurl + '/post/' + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
