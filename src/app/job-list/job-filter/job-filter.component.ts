import { Component } from '@angular/core';

@Component({
  selector: 'app-job-filter',
  templateUrl: './job-filter.component.html',
  styleUrl: './job-filter.component.css',
})
export class JobFilterComponent {
  jobTypes = [
    { id: 'fullTime', name: 'Full Time ', selected: true },
    { id: 'partTime', name: 'Part Time ', selected: true },
    { id: 'remote', name: 'Remote ', selected: true },
    { id: 'freelance', name: 'Freelance', selected: true },
  ];

  // Experience levels array
  experienceLevels = [
    { id: 'junior', name: 'Junior', selected: true },
    { id: 'regular', name: 'Regular', selected: true },
    { id: 'regular', name: 'Internship', selected: true },
  ];
  salaryFrom: number = 1500;
  salaryTo: number = 60000;

  // Logic to ensure the "From" salary doesn't exceed "To" salary
  onSalaryChange(): void {
    if (this.salaryFrom >= this.salaryTo) {
      this.salaryFrom = this.salaryTo - 500; // Adjust to prevent overlap
    }
    if (this.salaryTo <= this.salaryFrom) {
      this.salaryTo = this.salaryFrom + 500; // Adjust to prevent overlap
    }
  }
}
