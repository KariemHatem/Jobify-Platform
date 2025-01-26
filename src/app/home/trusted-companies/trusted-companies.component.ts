import { Component } from '@angular/core';

@Component({
  selector: 'app-trusted-companies',
  templateUrl: './trusted-companies.component.html',
  styleUrls: ['./trusted-companies.component.css'],
})
export class TrustedCompaniesComponent {
  companies = [
    { name: 'VOIS-Code' },
    { name: 'Capgemini' },
    { name: 'Procore Technologies' },
    { name: 'Emaratech' },
    { name: 'Santionan' },
    { name: 'Cocharge' },
    { name: 'Gucci' },
    { name: 'Siemens Software' },
    { name: 'TechSphere' },
  ];
}
