import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  createCustomer(data: any) {
    return this.http.post('http://localhost:8000/customer/create', data);
  }

  auth(data: any) {
    return this.http.post('http://localhost:8000/customer/authenticate', data);
  }

  resetPasswordCustomer(data: any) {
    return this.http.post('http://localhost:8000/customer/reset-password', data);
  }

  createContact(data: any) {
    return this.http.post('http://localhost:8000/contact/create', data);
  }

  getContacts() {
    return this.http.get('http://localhost:8000/contacts');
  }
}
