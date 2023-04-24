import { Component, OnInit } from '@angular/core';
 import { LoginComponent } from '../src/app/login/login.component'; 
 import { LogoutComponent } from '../src/app/logout/logout.component'; 
 import { WebSocketService } from '../src/app/websocket.service';  @
 
 Component({   selector: 'app-main',   
 templateUrl: './main.component.html',   styleUrls: ['./main.component.css'] }) 
 export class MainComponent implements OnInit {   username: string;   welcomeMessage: string;    constructor(private loginService: LoginComponent, private logoutService: LoginComponent, private messageService: WebSocketService) { }   
  ngOnInit() {     
    this.messageService.getMessage().subscribe(message => {       this.welcomeMessage = message;     });
     }    
     isLoggedIn() {     return this.username != null;   }    
     login(credentials: any) {     this.loginService.login(credentials.username, credentials.password).subscribe(response => {       this.username = credentials.username;     });   }    
     
     logout() {     
       
      this.logoutService.logout().subscribe(response => {       this.username = null;     });   } } 