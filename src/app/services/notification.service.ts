import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications = [
    { type: 'chat', message: 'New message from Dr. Smith', timestamp: new Date() },
    { type: 'comment', message: 'New comment on your post', timestamp: new Date() },
    { type: 'payment', message: 'Payment received from Patient John', timestamp: new Date() },
    { type: 'reminder', message: 'Appointment with Dr. Smith at 10:00 AM', timestamp: new Date() }
  ];

  constructor() { }

  getNotifications(): Observable<any[]> {
    return of(this.notifications);
  }

  addNotification(notification: any): void {
    this.notifications.push(notification);
  }
}