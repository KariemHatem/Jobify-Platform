import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-details-header',
  templateUrl: './job-details-header.component.html',
  styleUrl: './job-details-header.component.css',
})
export class JobDetailsHeaderComponent {
  @Input() job: any;
}
