import { Component } from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrl: './reminder.component.css',
})
export class ReminderComponent {
  email: string = '';
  submitted: boolean = false;

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
      const submittedEmail = this.email; // Store the submitted email

      // Clear the email input field after submission
      this.email = '';

      // Hide success message after 3 seconds
      setTimeout(() => {
        this.submitted = false;
      }, 3000);
    }
  }
}
