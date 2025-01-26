import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { JobListingService } from '../job-list/job-listing/job-listing.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css',
})
export class JobDetailsComponent implements OnInit {
  job: any;
  Jobs: any[] = [];
  constructor(private router: Router, private jobService: JobListingService) {}

  ngOnInit() {
    this.updateRandomJobs();
    // Subscribe to router events to update jobs on navigation
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateRandomJobs();
      });
    // Get the job data passed through the router's state
    this.job = history.state.job;

    if (!this.job) {
      // Handle case if no job data (e.g., user navigated directly to the details page)
      this.router.navigate(['/job-list']); // Redirect to job list page
    }
  }
  updateRandomJobs(): void {
    this.Jobs = this.jobService.getRandomJobs(); // Fetch random jobs
  }
}
