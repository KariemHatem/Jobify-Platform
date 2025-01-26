import { Component, OnInit } from '@angular/core';
import { UserService } from '../profile/profile.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  fullName: string = '';
  isLoggedIn: boolean = false; // Track login status

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.userService.user$.subscribe((user) => {
      if (user) {
        this.fullName = `${user.firstName} ${user.lastName}`; // Update the full name
      } else {
        this.fullName = ''; // Clear name on logout
      }
    });
  }
}
