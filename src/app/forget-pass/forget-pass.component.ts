import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css'],
})
export class ForgetPassComponent {
  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      // Here, you would handle the form submission, e.g., by calling a service to send a password reset email
      console.log(this.forgotPasswordForm.value); // For testing purposes, log the email value to the console
    }
  }
}
