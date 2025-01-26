import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const userData = localStorage.getItem('user');

    if (userData) {
      // User is logged in; allow access
      return true;
    } else {
      // User is not logged in; navigate to login page
      this.router.navigate(['/login'], {
        queryParams: { message: 'You must log in to access this page.' },
      });
      return false;
    }
  }
}
