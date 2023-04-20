import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  template: `
    <form (ngSubmit)="login()">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" [(ngModel)]="email" name="email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" [(ngModel)]="password" name="password">
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <p *ngIf="errorMessage" class="text-danger">{{ errorMessage }}</p>
  `
})
export class LoginComponent {
  email: string;
  password: string;
  errorMessage: string;

  constructor(private http: HttpClient) {}

  login() {
    this.http.post('http://66.70.229.82:8181/Authorize', { email: this.email, password: this.password }).subscribe(
      response => {
        console.log(response);
      },
      error => {
        this.errorMessage = error.message;
      }
    );
  }
}
