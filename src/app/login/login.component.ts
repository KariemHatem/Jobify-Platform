import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError: string = '';
  email: string = '';
  password: string = '';
  loginMessage: string | null = null;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute // Inject ActivatedRoute instance
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    // Get the message from query parameters if available
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    this.route.queryParams.subscribe((params) => {
      this.loginMessage = params['message'] || null;
      if (this.loginMessage) {
        alert(this.loginMessage); // Show alert with the message
      }
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((success) => {
        if (success) {
          this.router.navigate(['/profile']); // Redirect to user page on success
        } else {
          this.loginError = 'Invalid email or password'; // Show error if login fails
        }
      });
    }
  }
  sociallogin(provider: string) {
    let url: string;

    switch (provider) {
      case 'google':
        url =
          'https://accounts.google.com/o/oauth2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=profile email';
        break;
      case 'facebook':
        url =
          'https://www.facebook.com/v9.0/dialog/oauth?client_id=YOUR_FACEBOOK_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=email';
        break;
      case 'github':
        url =
          ' https://github.com/login/oauth/authorize?client_id=YOUR_GITHUB_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=user:email';
        break;
      default:
        console.error('Unknown provider:', provider);
        return; // Exit if the provider is unknown
    }

    window.open(url, '_blank');
  }
}
