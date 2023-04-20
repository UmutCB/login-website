import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as WebSocket from 'ws';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WebsocketService {
  private socket$: WebSocket;
  private readonly url = 'ws://66.70/?{token}';
    http: any;
  constructor() {  
    const token = localStorage.getItem('token'); 
    this.socket$ =  new WebSocket(this.url.replace('{token}',this.getToken));
 }
getToken() {
  const url = 'https://api.example.com/auth';
  const data = { username: 'your-username', password: 'your-password' };
  return this.http.post(url, data);
}
  public connect(): Observable<any> {
    this.socket$ = new WebSocket(this.url);

    return new Observable(observer => {
      this.socket$.onmessage = (event) => {
        observer.next(event.data);
      };
      this.socket$.onerror = (event) => {
        observer.error(event);
      };
      this.socket$.onclose = () => {
        observer.complete();
      };
    });
  }

  public send(message: any): void {
    this.socket$.send(JSON.stringify(message));
  }
}