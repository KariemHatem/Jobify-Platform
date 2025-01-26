import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.css',
})
export class PreloaderComponent implements OnInit {
  public isLoading: boolean = true; // Preloader is shown by default

  constructor() {}

  ngOnInit(): void {
    // Simulate loading delay (e.g., when data is being fetched)
    this.simulateLoading();
  }

  simulateLoading(): void {
    setTimeout(() => {
      this.isLoading = false; // Hide preloader after app has loaded
    }, 3000); // Adjust the delay time as per actual loading time
  }
}
