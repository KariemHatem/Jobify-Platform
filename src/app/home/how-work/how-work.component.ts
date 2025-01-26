import { Component } from '@angular/core';

@Component({
  selector: 'app-how-work',
  templateUrl: './how-work.component.html',
  styleUrl: './how-work.component.css',
})
export class HowWorkComponent {
  // Track the current active step
  activeStep = 1;

  // Image paths for each step
  images = {
    1: 'assets/images/How-Work/register.svg',
    2: 'assets/images/How-Work/search.svg',
    3: 'assets/images/How-Work/apply.svg',
  };

  // Set the initial image for step 1
  currentImage = this.images[1];

  // Function to set active step and update image
  setActive(step: number) {
    this.activeStep = step;
    this.currentImage = this.images[step as 1 | 2 | 3];
  }
}
