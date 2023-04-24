import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.getToken()) {
      this.router.navigate(['/GetGreeting']);
    }
  }
  onSubmit() {
    this.login(this.email, this.password);
  }

  login(email: string, password: string): void {
    this.authService.login(this.email, this.password).subscribe((response) => {
      this.authService.setToken(response.data.token);
      this.authService.connectWebSocket();
      this.router.navigate(['/GetGreeting']);
    });
  }
}
