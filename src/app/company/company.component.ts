import { Component } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.css',
})
export class CompanyComponent {
  searchQuery: string = '';

  handleSearch(query: string) {
    this.searchQuery = query;
  }
}
