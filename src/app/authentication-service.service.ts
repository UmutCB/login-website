import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private socket: any;
  private apiUrl = 'http://66.70.229.82:/8181';
  private token: string;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { email, password };
    return this.http.post(`${this.apiUrl}/Authorize`, JSON.stringify(body), { headers });
  }

  connectWebSocket(): void {
    this.socket = io(`${this.apiUrl}/?${this.token}`);
    this.socket.on('connect', () => console.log('Connected to WebSocket!'));
    this.socket.on('disconnect', () => console.log('Disconnected from WebSocket!'));
  }

  logout(): void {
    this.socket.emit('message', { messageType: 1 });
    this.socket.disconnect();
  }

  getToken(): string {
    return this.token;
  }
  setToken(token: string): void {
    this.token = token;
  }
}