import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saved-job',
  templateUrl: './saved-job.component.html',
  styleUrls: ['./saved-job.component.css'],
})
export class SavedJobComponent implements OnInit {
  savedJobs: any[] = []; // Array to store the saved jobs.
  selectedJob: any; // Job selected for removal
  isModalVisible: boolean = false; // Controls modal visibility

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Load saved jobs from localStorage
    const savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');
    this.savedJobs = savedJobs;
  }

  // Navigate to the job details page
  viewJobDetails(job: any): void {
    this.router.navigate(['/job-details'], {
      queryParams: { jobId: job.id }, // Pass job ID to the details page
    });
  }

  // Open the confirmation modal
  openConfirmationDialog(job: any): void {
    this.selectedJob = job;
    this.isModalVisible = true; // Show the modal
  }

  // Handle confirmation
  confirmRemoveJob(): void {
    if (this.selectedJob) {
      this.savedJobs = this.savedJobs.filter(
        (savedJob) => savedJob.id !== this.selectedJob.id
      );
      localStorage.setItem('savedJobs', JSON.stringify(this.savedJobs)); // Update localStorage
      this.selectedJob = null;
    }
    this.isModalVisible = false; // Hide the modal
  }

  // Handle cancellation
  cancelRemoveJob(): void {
    this.selectedJob = null; // Reset the selected job
    this.isModalVisible = false; // Hide the modal
  }

  // Function to apply for a job
  applyForJob(job: any): void {
    this.router.navigate(['/apply-now'], {
      queryParams: { jobTitle: job.title },
    });
  }
}
