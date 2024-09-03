import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { CommonModule } from '@angular/common';

interface Notification {
  user: string;
  activity: string;
  post?: string;
  time: string;
  avatar: string;
  unread: boolean;
  message?: string;
  image?: string;
}

@Component({
  selector: 'app-notification',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  unreadMessagesCount = 0;
  isLoading = false;
  messages: Notification[] = [
    {
      user: 'Mark Webber',
      activity: 'reacted to your recent post',
      post: 'My first tournament today!',
      time: '1m ago',
      avatar: './assets/images/avatar-mark-webber.webp',
      unread: true
    },
    {
      user: 'Angela Gray',
      activity: 'followed you',
      time: '5m ago',
      avatar: './assets/images/avatar-angela-gray.webp',
      unread: true
    },
    {
      user: 'Jacob Thompson',
      activity: 'has joined your group',
      post: 'Chess Club',
      time: '1 day ago',
      avatar: './assets/images/avatar-jacob-thompson.webp',
      unread: true
    },
    {
      user: 'Rizky Hasanuddin',
      activity: 'sent you a private message',
      time: '5 days ago',
      avatar: './assets/images/avatar-rizky-hasanuddin.webp',
      unread: false,
      message: 'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.'
    },
    {
      user: 'Kimberly Smith',
      activity: 'commented on your picture',
      time: '1 week ago',
      avatar: './assets/images/avatar-kimberly-smith.webp',
      unread: false,
      image: './assets/images/image-chess.webp'
    },
    {
      user: 'Nathan Pererson',
      activity: 'reacted to your recent post',
      post: '5 end-game strategies to increase your win rate',
      time: '2 weeks ago',
      avatar: './assets/images/avatar-nathan-peterson.webp',
      unread: false
    },
    {
      user: 'Anna Kim',
      activity: 'left the group',
      post: 'Chess Club',
      time: '2 weeks ago',
      avatar: './assets/images/avatar-anna-kim.webp',
      unread: false
    }
  ];

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.updateUnreadCount();
  }

  updateUnreadCount(): void {
    this.unreadMessagesCount = this.messages.filter(message => message.unread).length;
  }

  markAsRead(message: Notification): void {
    message.unread = false;
    this.updateUnreadCount();
  }

  markAllAsRead(): void {
    this.messages.forEach(message => message.unread = false);
    this.updateUnreadCount();
  }
}
