import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { AuthService } from '../authentication-service.service';
import { WebSocketService } from '../websocket.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  username: string;
  welcomeMessage: string;
  constructor(
    private loginService: LoginComponent,
    private logoutService: LogoutComponent,
    private messageService: WebSocketService
  ) {}
  ngOnInit() {
    this.messageService.getMessage().subscribe((message) => {
      this.welcomeMessage = message;
    });
  }
  isLoggedIn() {
    return this.username != null;
  }
  login(credentials: any) {
    this.loginService
      .login(credentials.email, credentials.password)
      .subscribe((response) => {
        this.username = credentials.email;
      });
  }

  logout() {
    this.logoutService.logout().subscribe((response) => {
      this.username = "";
    });
  }
}
