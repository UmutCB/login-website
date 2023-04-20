import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getMessage() {
    return this.http.get('http://66.70.229.82:8181/Message');
  }

  logout() {
    return this.http.get('http://66.70.229.82:8181/Logout');
  }
}