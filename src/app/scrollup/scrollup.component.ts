import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scrollup',
  templateUrl: './scrollup.component.html',
  styleUrl: './scrollup.component.css',
})
export class ScrollupComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
