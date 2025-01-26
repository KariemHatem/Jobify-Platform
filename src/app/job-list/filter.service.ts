import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // This makes the service available application-wide.
})
export class FilterService {
  // Initial filter state (default values)
  private filterSource = new BehaviorSubject<any>({
    jobTypes: [], // List of selected job types (e.g., full-time, part-time)
    experienceLevels: [], // List of selected experience levels (e.g., junior, expert)
    salaryFrom: 1500, // Minimum salary value
    salaryTo: 60000, // Maximum salary value
  });

  // Observable that will broadcast the current filter state to subscribers
  currentFilter = this.filterSource.asObservable();

  // Function to update the filter state when the user applies new filters
  updateFilter(newFilter: any) {
    this.filterSource.next(newFilter); // Broadcast the new filter state
  }
}
