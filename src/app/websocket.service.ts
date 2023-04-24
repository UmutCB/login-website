import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({ providedIn: 'root' })
export class WebSocketService {
  private socket$: WebSocketSubject<any>;
  private readonly socketUrl = 'ws://66.70.229.82:8181/?{token}';

  constructor() {
    const token = localStorage.getItem('token');
    this.socket$ = webSocket(this.socketUrl.replace('{token}', token));
  }
  sendMessage(msg: any) {
    this.socket$.next(msg);
  }

  getMessage() {
    return this.socket$.asObservable();
  }
}
