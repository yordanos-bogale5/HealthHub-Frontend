import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-toast-notification',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.css']
})
export class ToastNotificationComponent implements OnInit {
  notifications: string[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.getChatMessages().subscribe((message) => {
      this.showNotification('New chat message received');
    });

    this.notificationService.getCommentNotifications().subscribe((notification) => {
      this.showNotification('New comment on your post');
    });

    this.notificationService.getPaymentNotifications().subscribe((notification) => {
      this.showNotification('Payment successful');
    });

    this.notificationService.getAppointmentReminders().subscribe((reminder) => {
      this.showNotification('Appointment reminder');
    });
  }

  showNotification(message: string): void {
    this.notifications.push(message);
    setTimeout(() => {
      this.notifications.shift();
    }, 5000); // Remove notification after 5 seconds
  }
}
