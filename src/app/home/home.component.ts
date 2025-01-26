import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  locations: string[] = [
    'Cairo',
    'Canada',
    'Germany',
    'India',
    'Japan',
    'New York',
    'San Francisco',
    'Remote',
  ];

  selectedLocation: string = '';

  onSelect(event: any) {
    this.selectedLocation = event.target.value;
    console.log('Selected location:', this.selectedLocation);
  }
}
