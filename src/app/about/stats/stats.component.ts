import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css',
})
export class StatsComponent implements OnInit {
  stats = [
    { label: 'Available Jobs', count: 10000, value: 0 },
    { label: 'Applications', count: 7500, value: 0 },
    { label: 'Positive Feedback', count: 8850, value: 0 },
    { label: 'Users', count: 9875, value: 0 },
  ];

  @ViewChild('statsSection', { static: false }) statsSection!: ElementRef;
  private observer!: IntersectionObserver;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.initIntersectionObserver();
  }

  initIntersectionObserver() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.startCounting();
          this.observer.disconnect(); // Trigger counting only once
        }
      },
      { threshold: 0.5 }
    );

    this.observer.observe(this.statsSection.nativeElement);
  }

  startCounting() {
    this.stats.forEach((stat) => {
      const interval = setInterval(() => {
        if (stat.value < stat.count) {
          stat.value += Math.ceil(stat.count / 100); // Increment by steps
        } else {
          stat.value = stat.count; // Ensure it doesn't exceed the target
          clearInterval(interval);
        }
      }, 30); // Adjust speed by changing the interval
    });
  }
}
