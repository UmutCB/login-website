import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  constructor(private http: HttpClient) { }

  logout() {
    return this.http.get('/api/logout');
  }
}