import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'YOUR_API_KEY';
  localUrl = "http://localhost:3000/"

  constructor(private http: HttpClient) {
  }
  getBokings() {
    return this.http.get(this.localUrl+'bookings');
  }
  getInvoices() {
    return this.http.get(this.localUrl+'invoices');
  }
}
