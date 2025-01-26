import { Component, OnInit } from '@angular/core';
import { NotificationsService } from './notifications.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent implements OnInit {
  notifications: any[] = [];
  notificationCount: number = 0;
  displayedCount: number = 8;
  notificationLimits: number[] = [24, 10, 15, 8, 2, 4, 16];
  currentIndex: number = 0;
  isLoggedIn: boolean = false; // Track login status

  constructor(
    private notificationService: NotificationsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn(); // Check login status
    this.updateNotifications();
    this.notificationCount = this.notificationService.getNotificationCount();
  }

  updateNotifications() {
    this.notifications = this.notificationService.getNotifications(
      this.displayedCount
    );
  }

  onBellClick() {
    this.currentIndex =
      (this.currentIndex + 1) % this.notificationLimits.length;
    this.displayedCount = this.notificationLimits[this.currentIndex];
    this.updateNotifications();
  }

  setNotificationLimits(limits: number[]) {
    this.notificationLimits = limits;
    this.currentIndex = 0;
  }
}
