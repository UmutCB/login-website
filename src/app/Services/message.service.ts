import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  getMessage(): Observable<string> {
    return of('Welcome to my app!');
  }
}