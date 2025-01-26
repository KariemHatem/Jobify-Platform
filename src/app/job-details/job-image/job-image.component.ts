import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-image',
  templateUrl: './job-image.component.html',
  styleUrl: './job-image.component.css',
})
export class JobImageComponent {
  @Input() job: any;
}
