import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-info-sidebar',
  templateUrl: './company-info-sidebar.component.html',
  styleUrl: './company-info-sidebar.component.css',
})
export class CompanyInfoSidebarComponent {
  @Input() job: any;

  constructor(private router: Router) {}
  isModalVisible: boolean = false;
  // Open the confirmation dialog
  openConfirmationDialog(): void {
    this.isModalVisible = true; // Show the modal
  }

  // Handle confirmation (when user clicks "Yes, Delete")
  onConfirmDelete(): void {
    console.log('Item deleted');
    this.isModalVisible = false; // Hide the modal
  }

  // Handle cancellation (when user clicks "Cancel")
  onCancelDelete(): void {
    console.log('Delete canceled');
    this.isModalVisible = false; // Hide the modal
  }
  applyForJob(job: any) {
    this.router.navigate(['/apply-now'], {
      queryParams: { jobTitle: job.title },
    });
  }

  // Save the job to localStorage
  saveJob(job: any): void {
    const savedJobs = JSON.parse(localStorage.getItem('savedJobs') || '[]');

    // Check if the job is already saved
    if (!savedJobs.find((savedJob: any) => savedJob.id === job.id)) {
      savedJobs.push(job);
      localStorage.setItem('savedJobs', JSON.stringify(savedJobs)); // Save to localStorage
      alert('Job saved!');
    } else {
      alert('Job is already saved.');
    }
  }
}
