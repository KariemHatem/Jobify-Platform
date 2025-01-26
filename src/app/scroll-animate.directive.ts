import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
})
export class ScrollAnimateDirective {
  private hasAnimated = false; // Flag to check if the animation has been applied

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const elementPosition = this.el.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Check if the element is in view and the animation hasn't been applied yet
    if (elementPosition < windowHeight - 100 && !this.hasAnimated) {
      this.renderer.addClass(this.el.nativeElement, 'active');
      this.hasAnimated = true; // Set the flag to true to prevent further animations
    }
  }
}
