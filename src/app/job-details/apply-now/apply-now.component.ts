import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.css'],
})
export class ApplyNowComponent implements OnInit {
  applicant = {
    jobTitle: '',
    joblocation: '',
    name: '',
    email: '',
    phone: '',
    description: '',
    resume: null as File | null,
  };

  showSuccessAlert = false; // Flag to control alert visibility

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get jobTitle from query params and prefill the form
    this.route.queryParams.subscribe((params) => {
      if (params['jobTitle']) {
        this.applicant.jobTitle = params['jobTitle'];
      }
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.applicant.resume = file;
    }
  }

  onSubmit() {
    // Ensure all required fields are filled
    if (
      this.applicant.jobTitle &&
      this.applicant.name &&
      this.applicant.email &&
      this.applicant.phone &&
      this.applicant.resume
    ) {
      const formData = new FormData();
      formData.append('name', this.applicant.name);
      formData.append('email', this.applicant.email);
      formData.append('phone', this.applicant.phone);
      formData.append('resume', this.applicant.resume);
      formData.append('description', this.applicant.description);

      // Handle form submission (e.g., to backend API)
      console.log('Form submitted:', this.applicant);
      this.showSuccessAlert = true; // Show success alert on submission

      // Clear the form after submission except for the resume
      this.clearForm();

      // Automatically hide the success alert after 10 seconds
      setTimeout(() => {
        this.showSuccessAlert = false;
      }, 10000);
    }
  }

  clearForm() {
    // Reset applicant object to initial state except for resume
    this.applicant = {
      jobTitle: this.applicant.jobTitle, // Keep the job title
      joblocation: '',
      name: '',
      email: '',
      phone: '',
      description: '',
      resume: this.applicant.resume, // Keep the resume
    };
  }
}
