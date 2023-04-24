import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './authentication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-name';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (!this.authService.getToken()) {
      this.router.navigate(['/login']);
    }
  }

  login(): void {
    this.authService.login('sean@test.com', 'SeanPass').subscribe(response => {
      this.authService.setToken(response.data.token);
      this.authService.connectWebSocket();
      this.router.navigate(['/GetGreeting']);
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}