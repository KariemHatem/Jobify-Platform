import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  signup(userDetails: any): Observable<boolean> {
    // Store user details in localStorage (For demo purposes, storing entire user info)
    localStorage.setItem('user', JSON.stringify(userDetails));
    return of(true);
  }

  login(credentials: any): Observable<boolean> {
    // Check if user exists in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);

      // Check if the entered email exists
      if (credentials.email === user.email) {
        // Validate the password as well
        if (credentials.password === user.password) {
          this.loggedIn = true;
          localStorage.setItem('loggedIn', 'true');
          return of(true); // Valid login
        } else {
          return of(false); // Invalid password
        }
      } else {
        return of(false); // Invalid email
      }
    }
    return of(false); // No user found in localStorage
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('loggedIn');
  }
}
