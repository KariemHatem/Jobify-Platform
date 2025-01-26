import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrl: './job-search.component.css',
})
export class JobSearchComponent {
  searchQuery: string = ''; // Store the search query

  @Output() searchEvent = new EventEmitter<string>(); // Emit the search term to parent component

  searchJobs() {
    this.searchEvent.emit(this.searchQuery); // Emit the search query to filter jobs
  }
}
