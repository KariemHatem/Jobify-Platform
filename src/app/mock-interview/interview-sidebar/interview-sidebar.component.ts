import { Component } from '@angular/core';

@Component({
  selector: 'app-interview-sidebar',
  templateUrl: './interview-sidebar.component.html',
  styleUrl: './interview-sidebar.component.css',
})
export class InterviewSidebarComponent {
  resourceCategories: string[] = [
    'JavaScript',
    'Angular',
    'React',
    'Flutter',
    '.NET',
    'Node.js',
    'Python',
    'SQL and Databases',
    'Frontend Development',
    'Backend Development',
    'Overcoming Technical Mistakes',
    'General Technical',
  ];
  selectedCategory: string = 'JavaScript';

  resources = [
    {
      category: 'JavaScript',
      links: [
        {
          title: 'Interview Questions',
          url: 'https://www.javatpoint.com/javascript-interview-questions',
        },
        {
          title: 'Key Concepts',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
        },
        {
          title: 'Cheat Sheet',
          url: 'https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions',
        },
      ],
    },
    {
      category: 'Angular',
      links: [
        {
          title: 'Interview Questions',
          url: 'https://www.simplilearn.com/angular-interview-questions-and-answers-article',
        },
        {
          title: 'Official Docs',
          url: 'https://angular.io/',
        },
        {
          title: 'Tricky Questions',
          url: 'https://www.edureka.co/blog/angular-interview-questions/',
        },
      ],
    },
    {
      category: 'React',
      links: [
        {
          title: 'Beginner Questions',
          url: 'https://www.interviewbit.com/react-interview-questions/',
        },
        {
          title: 'Official Docs',
          url: 'https://reactjs.org/',
        },
        {
          title: 'Advanced Questions',
          url: 'https://www.edureka.co/blog/react-interview-questions/',
        },
      ],
    },
    {
      category: 'Flutter',
      links: [
        {
          title: 'Interview Questions',
          url: 'https://www.interviewbit.com/flutter-interview-questions/',
        },
        {
          title: 'Getting Started',
          url: 'https://flutter.dev/docs',
        },
        {
          title: 'Common Topics',
          url: 'https://www.geeksforgeeks.org/flutter-interview-questions/',
        },
        {
          title: 'Advanced Widgets',
          url: 'https://medium.com/flutter/advanced-flutter-widgets-and-interview-prep-101-3e3dbdb3b936',
        },
      ],
    },
    {
      category: 'Node.js',
      links: [
        {
          title: 'Interview Questions',
          url: 'https://www.simplilearn.com/node-js-interview-questions-article',
        },
        {
          title: 'Best Practices',
          url: 'https://github.com/goldbergyoni/nodebestpractices',
        },
        {
          title: 'Fundamentals',
          url: 'https://nodejs.dev/en/learn',
        },
        {
          title: 'Advanced Topics',
          url: 'https://www.toptal.com/nodejs/interview-questions',
        },
      ],
    },
    {
      category: 'Python',
      links: [
        {
          title: 'Beginner Questions',
          url: 'https://www.interviewbit.com/python-interview-questions/',
        },
        {
          title: 'Coding Challenges',
          url: 'https://www.hackerrank.com/domains/tutorials/10-days-of-python',
        },
        {
          title: 'Key Concepts',
          url: 'https://realpython.com/python-interview-questions/',
        },
        {
          title: 'Advanced Guide',
          url: 'https://www.toptal.com/python/interview-questions',
        },
      ],
    },
    {
      category: '.NET',
      links: [
        {
          title: 'Core Questions',
          url: 'https://www.dotnettricks.com/learn/netcore/net-core-interview-questions',
        },
        {
          title: 'Advanced Concepts',
          url: 'https://docs.microsoft.com/en-us/dotnet/',
        },
        {
          title: 'Common Topics',
          url: 'https://www.geeksforgeeks.org/top-net-interview-questions-and-answers/',
        },
      ],
    },
    {
      category: 'SQL and Databases',
      links: [
        {
          title: 'Interview Questions',
          url: 'https://www.interviewbit.com/sql-interview-questions/',
        },
        {
          title: 'Design Best Practices',
          url: 'https://www.geeksforgeeks.org/database-design/',
        },
        {
          title: 'Practice Exercises',
          url: 'https://www.w3schools.com/sql/sql_quiz.asp',
        },
        {
          title: 'Optimization Techniques',
          url: 'https://www.databasestar.com/database-performance-tuning/',
        },
      ],
    },
    {
      category: 'General Technical',
      links: [
        {
          title: 'System Design Guide',
          url: 'https://github.com/donnemartin/system-design-primer',
        },
        {
          title: 'Coding Interview Book',
          url: 'https://www.crackingthecodinginterview.com/',
        },
        {
          title: 'LeetCode Platform',
          url: 'https://leetcode.com/',
        },
        {
          title: 'Prep Resources',
          url: 'https://www.geeksforgeeks.org/',
        },
        {
          title: 'Tech Handbook',
          url: 'https://techinterviewhandbook.org/',
        },
      ],
    },
    {
      category: 'Frontend Development',
      links: [
        {
          title: 'Frontend Handbook',
          url: 'https://frontendinterviewhandbook.com/',
        },
        {
          title: 'CSS Tricks',
          url: 'https://css-tricks.com/',
        },
        {
          title: 'Web Optimization',
          url: 'https://web.dev/fast/',
        },
      ],
    },
    {
      category: 'Backend Development',
      links: [
        {
          title: 'Interview Questions',
          url: 'https://www.interviewbit.com/backend-interview-questions/',
        },
        {
          title: 'API Best Practices',
          url: 'https://www.geeksforgeeks.org/rest-api-best-practices/',
        },
        {
          title: 'Advanced Systems',
          url: 'https://www.toptal.com/backend/interview-questions',
        },
      ],
    },
    {
      category: 'Overcoming Technical Mistakes',
      links: [
        {
          title: 'Common Errors',
          url: 'https://blog.codacy.com/common-programming-errors',
        },
        {
          title: 'Debugging Guide',
          url: 'https://medium.com/javarevisited/debugging-tips-and-tricks-a-comprehensive-guide-8d84a58ca9f2',
        },
        {
          title: 'Mistakes in Interviews',
          url: 'https://www.smashingmagazine.com/2021/04/mistakes-technical-interviews/',
        },
        {
          title: 'Self-Taught Errors',
          url: 'https://dev.to/juliafmorgado/mistakes-self-taught-programmers-make-when-learning-to-code-and-how-to-avoid-them-5hf5',
        },
        {
          title: 'Debugging Techniques',
          url: 'https://wearebrain.com/blog/10-effective-debugging-techniques-for-developers/',
        },
        {
          title: 'Interview Pitfalls',
          url: 'https://medium.com/@nomanhanfi11/mistakes-to-avoid-in-technical-interviews-f177da059006',
        },
        {
          title: 'Learning Errors',
          url: 'https://www.reddit.com/r/learnprogramming/comments/xmztsa/what_mistakes_did_you_make_in_first_two_years_of/',
        },
      ],
    },
  ];

  filteredResources = this.resources.filter(
    (resource) => resource.category === this.selectedCategory
  );

  filterResources() {
    this.filteredResources = this.resources.filter(
      (resource) => resource.category === this.selectedCategory
    );
  }
}
