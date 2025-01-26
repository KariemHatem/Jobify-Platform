import { Component } from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css',
})
export class ServicesPageComponent {
  services = [
    {
      icon: 'fa-desktop',
      title: 'Display Jobs',
      description:
        'Explore a comprehensive list of available jobs, categorized for easy navigation, and keep track of the opportunities you’re most interested in.',
      link: '/job-list',
    },
    {
      icon: 'fa-briefcase',
      title: 'Jobs Details',
      description:
        'Get in-depth details about each job, including responsibilities, requirements, and insights to help you make informed career choices.',
      link: '/job-details',
    },
    {
      icon: 'fa-search',
      title: 'Job Search',
      description:
        'Search for jobs tailored to your preferences by title, location, or type, and find your dream opportunity quickly and effectively.',
      link: '/job-list',
    },
    {
      icon: 'fa-users',
      title: 'Companies',
      description:
        'Discover top companies, learn about their cultures, and explore open positions to find your best workplace match.',
      link: '/company',
    },
    {
      icon: 'fa-life-ring',
      title: 'Features Jobs',
      description:
        'Browse highlighted job listings that showcase top opportunities from leading companies in various industries.',
      link: '/job-list',
    },
    {
      icon: 'fa-bookmark',
      title: 'Bookmark Jobs',
      description:
        'Save jobs of interest to revisit later and never miss out on an opportunity you’re considering.',
      link: '/saved-job',
    },
    {
      icon: 'fa-solid fa-cloud-arrow-up',
      title: 'Apply for Jobs',
      description:
        'Easily apply to jobs with a streamlined application process, increasing your chances of landing the position you desire.',
      link: '/apply-now',
    },
    {
      icon: 'fa-lightbulb',
      title: 'Interview Preparation',
      description:
        'Prepare for interviews with tips, mock sessions, and resources to build confidence and ace your interviews.',
      link: '/mock-interview',
    },
    {
      icon: 'fa-solid fa-paper-plane',
      title: 'Subscribe for Jobs',
      description:
        'Stay updated on the latest opportunities by subscribing to job alerts that match your preferences and skillset.',
      link: '/home',
    },
  ];
}
