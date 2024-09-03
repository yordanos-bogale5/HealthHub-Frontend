import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private chatSocket$: WebSocketSubject<any>;

  constructor(private http: HttpClient) {
    this.chatSocket$ = new WebSocketSubject('ws://your-websocket-url');
  }

  getChatMessages(): Observable<any> {
    return this.chatSocket$.asObservable();
  }

  getCommentNotifications(): Observable<any> {
    return this.http.get('/api/comments/notifications').pipe(
      catchError(this.handleError)
    );
  }

  getPaymentNotifications(): Observable<any> {
    return this.http.get('/api/payments/notifications').pipe(
      catchError(this.handleError)
    );
  }

  getAppointmentReminders(): Observable<any> {
    return this.http.get('/api/appointments/reminders').pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
