import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private notifications = [
    {
      title: 'Front-End Developer',
      company: 'VOIS-Code',
      posted: '3 mins ago',
      companyLogo: 'assets/images/Home/Company-1.jpg',
    },
    {
      title: 'Fresh (React Native) Developer',
      company: 'Capgemini',
      posted: '10 mins ago',
      companyLogo: 'assets/images/Home/Company-2.jpg',
    },
    {
      title: 'FullStack Senior Software Engineer (Ruby/JS-TS)',
      company: 'Procore Technologies',
      posted: '2 hours ago',
      companyLogo: 'assets/images/Home/Company-3.jpg',
    },
    {
      title: 'Junior Frontend Developer (Angular)',
      company: 'Emaratech',
      posted: '3 mins ago',
      companyLogo: 'assets/images/Home/Company-4.jpg',
    },
    {
      title: 'Fresh Backend (.Net)',
      company: 'Santionan',
      posted: '3 sec ago',
      companyLogo: 'assets/images/Home/Company-5.jpg',
    },
    {
      title: 'Junior Web Developer (Remote)',
      company: 'Cocharge',
      posted: '20 mins ago',
      companyLogo: 'assets/images/Home/Company-6.jpg',
    },
    {
      title: 'Senior React Native Developer',
      company: 'Gucci, Inc',
      posted: '1 sec ago',
      companyLogo: 'assets/images/Home/Company-7.jpg',
    },
    {
      title: 'SW QA Engineer - RVE',
      company: 'Siemens Software',
      posted: '3 hours ago',
      companyLogo: 'assets/images/Home/Company-8.jpg',
    },
    {
      title: 'Junior Front-End Developer',
      company: 'TechSphere',
      posted: '2 hours ago',
      companyLogo: 'assets/images/jobs/job-1.png',
    },
    {
      title: 'Junior Back-End Developer',
      company: 'CodeNexus Ltd',
      posted: '10 hour ago',
      companyLogo: 'assets/images/jobs/job-2.png',
    },
    {
      title: 'Junior UI/UX Designer',
      company: 'DesignWaves',
      posted: '2 sec ago',
      companyLogo: 'assets/images/jobs/job-3.png',
    },
    {
      title: 'Junior Full-Stack Developer',
      company: 'CloudMinds Technologies',
      posted: '19 mins ago',
      companyLogo: 'assets/images/jobs/job-4.png',
    },

    {
      title: 'Junior Front-End Developer',
      company: 'PixelTech',
      posted: '3 mins ago',
      companyLogo: 'assets/images/jobs/job-5.png',
    },
    {
      title: 'Junior Back-End Engineer',
      company: 'Skyline Software',
      posted: '3 hour ago',
      companyLogo: 'assets/images/jobs/job-6.png',
    },
    {
      title: 'UI/UX Designer',
      company: 'BrightPixel Studios',
      posted: '3 mins ago',
      companyLogo: 'assets/images/jobs/job-7.png',
    },
    {
      title: 'Junior Front-End Developer',
      company: 'InnovateTech',
      posted: '3 mins ago',
      companyLogo: 'assets/images/jobs/job-8.png',
    },
    {
      title: 'Back-End Developer',
      company: 'DataBridge Systems',
      posted: '2 days ago',
      companyLogo: 'assets/images/jobs/job-9.png',
    },
    {
      title: 'Junior UI Designer',
      company: 'CreativeCode Studios',
      posted: '3 days ago',
      companyLogo: 'assets/images/jobs/job-10.png',
    },
    {
      title: 'Junior Front-End Developer (React)',
      company: 'PixelHub',
      posted: '12 mins ago',
      companyLogo: 'assets/images/jobs/job-11.png',
    },
    {
      title: 'Junior Back-End Developer',
      company: 'CodeForge',
      posted: '3 mins ago',
      companyLogo: 'assets/images/jobs/job-12.png',
    },
    {
      title: 'Junior Flutter Developer',
      company: 'AppX Innovations',
      posted: '3 days ago',
      companyLogo: 'assets/images/jobs/job-13.png',
    },
    {
      title: 'Full-Stack Developer (Flutter/Node.js)',
      company: 'CloudStack',
      posted: '3 mins ago',
      companyLogo: 'assets/images/jobs/job-43.png',
    },
    {
      title: 'Junior Flutter Developer',
      company: 'TechNest',
      posted: '10 mins ago',
      companyLogo: 'assets/images/jobs/job-15.png',
    },
    {
      title: 'Junior Back-End Developer (Python)',
      company: 'DataWave',
      posted: '2 mins ago',
      companyLogo: 'assets/images/jobs/job-16.png',
    },
    {
      title: 'Junior Front-End Developer (Angular)',
      company: 'WebMinds',
      posted: '5 days ago',
      companyLogo: 'assets/images/jobs/job-17.png',
    },
    {
      title: 'Junior Flutter Developer',
      company: 'MobileX',
      posted: 'Week ago',
      companyLogo: 'assets/images/jobs/job-18.png',
    },

    {
      title: 'Junior Software Engineer (Full-Stack)',
      company: 'NextGen Innovations',
      posted: '5 sec ago',
      companyLogo: 'assets/images/jobs/job-19.png',
    },
    {
      title: 'Junior Front-End Developer (Vue.js)',
      company: 'CodeSphere',
      posted: '3 days ago',
      companyLogo: 'assets/images/jobs/job-20.png',
    },
    {
      title: 'Junior Front-End Developer (React)',
      company: 'WebForge',
      posted: '2 Week ago',
      companyLogo: 'assets/images/jobs/job-21.png',
    },
    {
      title: 'Junior Software Engineer (JavaScript)',
      company: 'TechNova',
      posted: '19 mins ago',
      companyLogo: 'assets/images/jobs/job-22.png',
    },
    {
      title: 'Junior Flutter Developer',
      company: 'GFlutterWorks',
      posted: '31 sec ago',
      companyLogo: 'assets/images/jobs/job-23.png',
    },
    {
      title: 'Junior Flutter Developer',
      company: 'DevLink Technologies',
      posted: '38 mins ago',
      companyLogo: 'assets/images/jobs/job-24.png',
    },
    {
      title: 'Junior Flutter Developer',
      company: 'AppTide Solutions',
      posted: '3 mins ago',
      companyLogo: 'assets/images/jobs/job-25.png',
    },
    {
      title: 'Software Engineer Intern',
      company: 'InnoWave',
      posted: '10 hour ago',
      companyLogo: 'assets/images/jobs/job-26.png',
    },
    {
      title: 'Junior DevOps Engineer',
      company: 'CloudNet Technologies',
      posted: '8 hour ago',
      companyLogo: 'assets/images/jobs/job-27.png',
    },

    {
      title: 'Front-End Developer',
      company: 'UIX Solutions',
      posted: '15 sec ago',
      companyLogo: 'assets/images/jobs/job-28.png',
    },
    {
      title: 'Mobile App Developer (Flutter)',
      company: 'CodeBlitz',
      posted: '8 mins ago',
      companyLogo: 'assets/images/jobs/job-29.png',
    },
    {
      title: 'Junior Software Engineer',
      company: 'CodeBridge Solutions',
      posted: '5 hours ago',
      companyLogo: 'assets/images/jobs/job-30.png',
    },
    {
      title: 'Junior Software Engineer (Remote)',
      company: 'NextGen Technologies',
      posted: '3 mins ago',
      companyLogo: 'assets/images/jobs/job-31.png',
    },
    {
      title: 'Junior Flutter Developer (Remote)',
      company: 'AppGlobe',
      posted: '3 hours ago',
      companyLogo: 'assets/images/jobs/job-32.png',
    },
    {
      title: 'Backend Developer (Junior)',
      company: 'DataFlow Solutions',
      posted: '2 mins ago',
      companyLogo: 'assets/images/jobs/job-33.png',
    },
    {
      title: 'Entry-Level Mobile App Developer',
      company: 'AppInspire',
      posted: '6 mins ago',
      companyLogo: 'assets/images/jobs/job-34.png',
    },
    {
      title: 'Junior Full-Stack Developer',
      company: 'WebSync Technologies',
      posted: '30 mins ago',
      companyLogo: 'assets/images/jobs/job-35.png',
    },
    {
      title: 'Junior Software Engineer (Remote)',
      company: 'Innovatech Solutions',
      posted: '3 mins ago',
      companyLogo: 'assets/images/jobs/job-36.png',
    },
    {
      title: 'Software Developer Intern',
      company: 'CodeCraft Labs',
      posted: '22 mins ago',
      companyLogo: 'assets/images/jobs/job-37.png',
    },
    {
      id: 46,
      title: 'Junior Mobile App Developer',
      company: 'AppTrail',
      posted: '4 days ago',
      companyLogo: 'assets/images/jobs/job-38.png',
    },
    {
      id: 47,
      title: 'Full-Stack Developer (Junior)',
      company: 'SkyTech Solutions',
      posted: '30 sec ago',
      companyLogo: 'assets/images/jobs/job-39.png',
    },
    {
      id: 48,
      title: 'Junior DevOps Engineer',
      company: 'Cloudify Tech',
      posted: '52 mins ago',
      companyLogo: 'assets/images/jobs/job-40.png',
    },
    {
      title: 'Back-End Software Engineer',
      company: 'DataFlow Solutions',
      posted: '3 days ago',
      companyLogo: 'assets/images/jobs/job-41.png',
    },
    {
      title: 'Front-End Developer (Entry-level)',
      company: 'PixelPoint Studios',
      posted: '22 mins ago',
      companyLogo: 'assets/images/jobs/job-42.png',
    },
  ];

  getNotifications(count: number) {

    return this.notifications.sort(() => 0.5 - Math.random()).slice(0, count);
  }

  getNotificationCount() {
    return this.notifications.length;
  }
}
