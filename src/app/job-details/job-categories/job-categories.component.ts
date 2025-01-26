import { Component } from '@angular/core';

@Component({
  selector: 'app-job-categories',
  templateUrl: './job-categories.component.html',
  styleUrl: './job-categories.component.css',
})
export class JobCategoriesComponent {
  categories = [
    'Web Development',
    'Mobile Development',
    'Data Science & Analytics',
    'Cybersecurity',
    'DevOps',
    'UI/UX Design',
    'Artificial Intelligence & Machine Learning',
    'Blockchain Development',
  ];
}
