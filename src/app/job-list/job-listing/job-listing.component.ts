import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { JobListingService } from './job-listing.service';

interface Job {
  title: string;
  location: string;
  jobType: string;
  type: string;
  description: string;
  salary: string;
}

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.css',
})
export class JobListingComponent implements OnInit {
  jobs: any[] = [];
  filteredJobs: any[] = [];
  currentPage: number = 1;
  jobsPerPage: number = 6;
  totalJobs: number = 0;
  totalPages: number = 1;
  sortOption: string = 'newest';

  @Input() searchQuery: string = '';
  constructor(private jobService: JobListingService, private router: Router) {}

  applyForJob(job: any) {
    this.router.navigate(['/apply-now'], {
      queryParams: { jobTitle: job.title },
    });
  }
  viewJobDetails(job: any) {
    // Navigate to job details page, passing the job data
    this.router.navigate(['/job-details'], { state: { job: job } });
  }

  ngOnInit(): void {
    this.filteredJobs = [...this.jobs]; // Initially display all jobs
    this.jobs = this.shuffleArray(this.jobService.getJobs()); // Shuffle jobs
    this.totalJobs = this.jobs.length;
    this.totalPages = Math.ceil(this.totalJobs / this.jobsPerPage);
  }
  ngOnChanges(): void {
    console.log('Search Query: ', this.searchQuery); // Check if searchQuery is updated
    if (this.searchQuery) {
      this.filteredJobs = this.jobs.filter((job) =>
        job.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredJobs = [...this.jobs];
    }
  }

  get paginatedJobs() {
    const start = (this.currentPage - 1) * this.jobsPerPage;
    const end = this.currentPage * this.jobsPerPage;
    return this.jobs.slice(start, end);
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  onSortChange(option: string) {
    this.sortOption = option;
    this.sortJobs();
  }

  sortJobs() {
    this.jobs.sort((a, b) => a.title.localeCompare(b.title));
    switch (this.sortOption) {
      case 'newest':
        this.jobs.sort((a, b) => this.comparePostedDate(b.posted, a.posted));
        break;
      case 'oldest':
        this.jobs.sort((a, b) => this.comparePostedDate(a.posted, b.posted));
        break;
      case 'highest':
        this.jobs.sort((a, b) => this.compareSalary(b.salary, a.salary));
        break;
      case 'freelance':
        this.jobs.sort((a, b) =>
          this.compareJobType(a.type, b.type, 'freelance')
        );
        break;
      case 'partTime':
        this.jobs.sort((a, b) =>
          this.compareJobType(a.type, b.type, 'part time')
        );
        break;
      case 'fullTime':
        this.jobs.sort((a, b) =>
          this.compareJobType(a.type, b.type, 'full time')
        );
        break;
      case 'remote':
        this.jobs.sort((a, b) =>
          this.compareJobType(a.location, b.location, 'remote')
        );
        break;
    }
  }

  private compareJobType(
    typeA: string,
    typeB: string,
    sortType: string
  ): number {
    const isTypeA = typeA.toLowerCase() === sortType;
    const isTypeB = typeB.toLowerCase() === sortType;

    if (isTypeA && !isTypeB) {
      return -1;
    } else if (!isTypeA && isTypeB) {
      return 1;
    }
    return 0; // Equal, no sorting needed
  }

  private comparePostedDate(postedA: string, postedB: string): number {
    const timeA = this.parsePostedTime(postedA);
    const timeB = this.parsePostedTime(postedB);
    return timeA - timeB;
  }

  private parsePostedTime(posted: string): number {
    const timeValue = parseInt(posted.split(' ')[0], 10);
    const timeUnit = posted.split(' ')[1];
    let milliseconds: number;

    switch (timeUnit) {
      case 'sec':
        milliseconds = timeValue * 1000;
        break;
      case 'mins':
        milliseconds = timeValue * 60 * 1000;
        break;
      case 'hour':
        milliseconds = timeValue * 60 * 60 * 1000;
        break;
      case 'days':
        milliseconds = timeValue * 24 * 60 * 60 * 1000;
        break;
      default:
        milliseconds = 0;
    }

    return Date.now() - milliseconds; // Calculate the date from now
  }

  private compareSalary(salaryA: string, salaryB: string): number {
    const parsedA = this.parseSalary(salaryA);
    const parsedB = this.parseSalary(salaryB);
    return parsedA - parsedB;
  }

  private parseSalary(salary: string): number {
    const value = parseFloat(salary.replace(/[^0-9.-]+/g, ''));
    return value;
  }

  // Utility function to shuffle jobs array
  private shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }
}
