import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrl: './company-search.component.css',
})
export class CompanySearchComponent {
  searchQuery: string = ''; // Store the search query

  @Output() searchEvent = new EventEmitter<string>(); // Emit the search term to parent component

  searchCompanies() {
    this.searchEvent.emit(this.searchQuery); // Emit the search query to filter jobs
  }
}
