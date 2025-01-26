import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  user: any = {
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    phone: '',
    headline: '',
    bio: '',
    openToRemote: false,
    openToRelocation: false,
    linkedin: '',
    twitter: '',
    website: '',
    video: '',
    skills: '',
    photo: '',
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {
    // Load user data from local storage
    const userData = localStorage.getItem('user');
    this.user = userData ? JSON.parse(userData) : this.user;
  }
  logout(): void {
    this.authService.logout();
    if (confirm('Are you sure you want to log out?')) {
      localStorage.removeItem('user');
      this.userService.clearUser();
      this.router.navigate(['/login']);
    }
  }

  updateProfile(): void {
    // Store the updated user profile in local storage
    localStorage.setItem('user', JSON.stringify(this.user));

    // Notify other components about the user update
    this.userService.setUser(this.user);

    alert('Profile updated successfully!');
  }
  uploadCV(event: any) {
    // Handle the file upload event here
    console.log('File uploaded:', event.target.files[0]);
  }
  uploadPhoto(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.user.photo = reader.result as string; // Store base64 string in user object
        localStorage.setItem('user', JSON.stringify(this.user));
        console.log('Photo uploaded:', this.user.photo);
      };
      reader.readAsDataURL(file); // Convert file to base64 string
    }
  }
  removePhoto(): void {
    this.user.photo = ''; // Clear the photo from the user object
    localStorage.setItem('user', JSON.stringify(this.user)); // Update local storage
    alert('Profile photo removed successfully!');
  }

  onlyOneCheckbox(selected: string): void {
    if (selected === 'remote') {
      this.user.openToRelocation = false; // Uncheck the other checkbox
    } else {
      this.user.openToRemote = false; // Uncheck the other checkbox
    }
  }
}
