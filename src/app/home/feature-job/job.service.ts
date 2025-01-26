import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor() {}

  // Sample data for jobs
  getJobs() {
    return [
      {
        title: 'Front-End Developer',
        company: 'VOIS-Code',
        location: 'Cairo',
        jobType: 'Full time',
        postedTime: '3 mins ago',
        salary: '$500/Hour',
        description:
          'Lead the development and implementation of front-end architecture for web applications.',
        urgent: true,
        senior: false,
        fullTime: true,
        imgSrc: 'assets/images/Home/Company-1.jpg',
      },
      {
        title: 'Fresh (React Native) Developer',
        company: 'Capgemini',
        location: 'Canada',
        jobType: 'Full time',
        postedTime: '10 mins ago',
        salary: '$1000/Hour',
        description:
          'Develop and build advanced applications,Review code developed by the rest of the team.',
        urgent: true,
        senior: false,
        fullTime: true,
        imgSrc: 'assets/images/Home/Company-2.jpg',
      },
      {
        title: 'FullStack Senior Software Engineer (Ruby/JS-TS)',
        company: 'Procore Technologies',
        location: 'India',
        jobType: 'Full time',
        postedTime: '2 hours ago',
        salary: '$1200/Hour',
        description:
          'What if you could use your technology skills to develop a product that impacts the way communities’ hospitals.',
        urgent: true,
        senior: true,
        fullTime: true,
        imgSrc: 'assets/images/Home/Company-3.jpg',
      },
      {
        title: 'Junior Frontend Developer (Angular)',
        company: 'Emaratech',
        location: 'Cairo',
        jobType: 'Part time',
        postedTime: '3 mins ago',
        salary: '$230/Hour',
        description:
          'We are looking for Angular developers that have the ability to work with a team and build a dynamic user interface  for our Egypt (Cairo ) office',
        urgent: true,
        senior: false,
        fullTime: false,
        imgSrc: 'assets/images/Home/Company-4.jpg',
      },
      {
        title: 'Fresh Backend (.Net)',
        company: 'Santionan',
        location: 'Cairo',
        jobType: 'Full time',
        postedTime: '3 sec ago',
        salary: '$250/Hour',
        description:
          'We want someone who has good skilled with using and bulid .net application at server side.. ',
        urgent: true,
        senior: false,
        fullTime: true,
        imgSrc: 'assets/images/Home/Company-5.jpg',
      },
      {
        title: 'Junior Web Developer (Remote)',
        company: 'Cocharge',
        location: 'Germany',
        jobType: 'Part time',
        postedTime: '20 mins ago',
        salary: '$300/Hour',
        description:
          'At cocharge / HadSol GmbH, we are a startup focused on electro-mobility with the mission to accelerate the transition to sustainable ',
        urgent: true,
        senior: false,
        fullTime: false,
        imgSrc: 'assets/images/Home/Company-6.jpg',
      },
      {
        title: 'Senior React Native Developer',
        company: 'Alion, Inc',
        location: 'New York, NY',
        jobType: 'Full time',
        postedTime: '1 sec ago',
        salary: '$600/Hour',
        description:
          'Are you a budding web developer with a passion for creating stunning websites and web applications?  We are looking for a skilled React Native developer to join our team.',
        urgent: true,
        senior: true,
        fullTime: true,
        imgSrc: 'assets/images/Home/Company-7.jpg',
      },
      {
        title: 'SW QA Engineer - RVE',
        company: 'Siemens Software',
        location: 'Remote',
        jobType: 'Part time',
        postedTime: '3 hours ago',
        salary: '$800/Hour',
        description:
          'Calibre’s high-capacity and high-performance tools are key to our customers’ .',
        urgent: true,
        senior: true,
        fullTime: false,
        imgSrc: 'assets/images/Home/Company-8.jpg',
      },
    ];
  }
}
