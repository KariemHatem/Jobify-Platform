import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
})
export class FeaturesComponent {
  features = [
    { icon: 'fa-briefcase', title: 'Job Listing' },
    { icon: 'fa-file-alt', title: ' CV Analysis' },
    { icon: 'fa-lock', title: 'Privacy Policy' },
    { icon: 'fa-user-tie', title: 'Companies Page' },
    { icon: 'fa-desktop', title: 'Display Jobs' },
    { icon: 'fa-handshake', title: 'For Agencies' },
    { icon: 'fa-headset', title: 'Quick Support' },
    { icon: 'fa-bookmark', title: 'Bookmark Jobs' },
    { icon: 'fa-chart-line', title: 'Real-time Analytics' },
  ];
}
