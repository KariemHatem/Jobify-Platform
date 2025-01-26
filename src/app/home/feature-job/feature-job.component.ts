import { Component, OnInit } from '@angular/core';
import { JobService } from './job.service';

@Component({
  selector: 'app-feature-job',
  templateUrl: './feature-job.component.html',
  styleUrl: './feature-job.component.css',
})
export class FeatureJobComponent implements OnInit {
  jobs: any[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobs = this.jobService.getJobs();
  }
}
