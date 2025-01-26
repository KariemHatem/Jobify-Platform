import { Component, OnInit, Input } from '@angular/core';
import { CompanyListesService } from './company-listes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-listing',
  templateUrl: './company-listing.component.html',
  styleUrl: './company-listing.component.css',
})
export class CompanyListingComponent implements OnInit {
  company: any;
  companies: any[] = [];
  filteredCompanies: any[] = [];
  currentPage: number = 1;
  companiesPerPage: number = 16;
  totalcompanies: number = 0;
  totalPages: number = 1;
  @Input() searchQuery: string = '';

  constructor(
    private companyService: CompanyListesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.filteredCompanies = [...this.companies]; // Initially display all jobs
    this.companies = this.shuffleArray(this.companyService.getCompanies()); // Shuffle jobs
    this.totalcompanies = this.companies.length;
    this.totalPages = Math.ceil(this.totalcompanies / this.companiesPerPage);
  }
  viewJobDetails(job: any) {
    // Navigate to job details page, passing the job data
    this.router.navigate(['/job-details'], { state: { job: job } });
  }
  ngOnChanges(): void {
    console.log('Search Query: ', this.searchQuery); // Check if searchQuery is updated
    if (this.searchQuery) {
      this.filteredCompanies = this.companies.filter((company) =>
        company.company.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredCompanies = [...this.companies];
    }
  }

  get paginatedCompanies() {
    const start = (this.currentPage - 1) * this.companiesPerPage;
    const end = this.currentPage * this.companiesPerPage;
    return this.companies.slice(start, end);
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  private shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
