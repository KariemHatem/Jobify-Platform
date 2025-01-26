import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
})
export class SubscriptionComponent {
  subscribeForm: FormGroup;
  isSubscribed = false;

  constructor(private fb: FormBuilder) {
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  onSubmit() {
    if (this.subscribeForm.valid) {
      const email = this.subscribeForm.value.email;
      console.log('Email:', email);

      this.isSubscribed = true;

      // Hide the success message after 5 seconds
      setTimeout(() => {
        this.isSubscribed = false;
      }, 5000);
      this.subscribeForm.reset();
    }
  }
}
