import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-similar-job',
  templateUrl: './similar-job.component.html',
  styleUrl: './similar-job.component.css',
})
export class SimilarJobComponent {
  @Input() job: any;
}
