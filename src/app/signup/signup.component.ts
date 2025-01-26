import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.value).subscribe(() => {
        this.router.navigate(['/login']); // Redirect to login page after successful signup
      });
    }
  }
  socialSignUp(provider: string) {
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
