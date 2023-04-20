import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-welcome',
  template: `
    <h1>Welcome {{ message?.name }}!</h1>
    <p>{{ message?.text }}</p>
    <button (click)="logout()">Logout</button>
  `
})
export class MainComponent implements OnInit {
  message: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMessage().subscribe(
      response => {
        this.message = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  logout() {
    this.apiService.logout().subscribe();
  }
}