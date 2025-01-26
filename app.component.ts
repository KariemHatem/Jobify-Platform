import { Component, ViewChild, OnInit } from '@angular/core';
import { PreloaderComponent } from './preloader/preloader.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'jobfinder';

  @ViewChild(PreloaderComponent) preloader!: PreloaderComponent;
  constructor(private router: Router) {}
  ngOnInit(): void {
    // Simulate app load and hide preloader
    setTimeout(() => {
      this.preloader.isLoading = false; // Hide preloader after app is loaded
    }, 3000); // Adjust the delay as per actual app loading time

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }
}
