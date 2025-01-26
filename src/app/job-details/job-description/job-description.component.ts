import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrl: './job-description.component.css',
})
export class JobDescriptionComponent {
  @Input() job: any;
}
