import { Component, OnInit, OnChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-mock-interview',
  templateUrl: './mock-interview.component.html',
  styleUrl: './mock-interview.component.css',
})
export class MockInterviewComponent implements OnInit, OnChanges {
  selectedInterviewType: string = 'technical'; // Default interview type
  selectedVideoType: string = 'technical'; // Default to 'technical'
  currentQuestionIndex: number = 0; // Track current question index

  questions: any[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  technicalQuestions = [
    {
      question: 'Explain the difference between HTTP and HTTPS.',
      answer: 'HTTPS is the secure version of HTTP, using SSL/TLS encryption.',
      tip: 'Make sure to explain security protocols in detail.',
    },
    {
      question:
        'What is the difference between synchronous and asynchronous programming?',
      answer:
        'Synchronous programming executes tasks sequentially, while asynchronous programming allows for non-blocking operations.',
      tip: 'Use real-life examples to clarify the concept.',
    },
    {
      question: 'What is REST API?',
      answer:
        'REST API stands for Representational State Transfer, which is an architectural style for web services.',
      tip: 'Discuss HTTP methods and stateless communication.',
    },
    {
      question: 'Explain the concept of a linked list.',
      answer:
        'A linked list is a linear data structure where each element (node) points to the next element in the sequence.',
      tip: 'Be prepared to discuss singly and doubly linked lists.',
    },
    {
      question: 'What is a binary tree?',
      answer:
        'A binary tree is a hierarchical data structure where each node has at most two children, referred to as left and right children.',
      tip: 'Discuss tree traversal methods like inorder, preorder, and postorder.',
    },
    {
      question: 'What is the difference between a stack and a queue?',
      answer:
        'A stack follows the Last In, First Out (LIFO) principle, whereas a queue follows the First In, First Out (FIFO) principle.',
      tip: 'Provide real-world analogies such as a stack of plates (LIFO) and a queue at a checkout line (FIFO).',
    },
    {
      question: 'What is a hash table?',
      answer:
        'A hash table is a data structure that stores key-value pairs, with a hash function used to compute the index for storing and retrieving values.',
      tip: 'Mention handling of collisions and hash functions.',
    },
    {
      question: 'Explain the concept of recursion.',
      answer:
        'Recursion is a programming technique where a function calls itself in order to solve a problem.',
      tip: 'Use a simple example, such as the Fibonacci sequence or factorial calculation.',
    },
    {
      question: 'What is the time complexity of binary search?',
      answer:
        'The time complexity of binary search is O(log n), where n is the number of elements in the array.',
      tip: 'Make sure to explain how binary search divides the search space in half at each step.',
    },
    {
      question: 'Explain what a database index is.',
      answer:
        'A database index is a data structure that improves the speed of data retrieval operations on a database table at the cost of additional space and maintenance time.',
      tip: 'Be sure to explain the trade-offs involved with using indexes.',
    },
    {
      question: 'What is normalization in databases?',
      answer:
        'Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.',
      tip: 'Discuss various normal forms (1NF, 2NF, 3NF) and their use cases.',
    },
    {
      question: 'How do you reverse a string in JavaScript?',
      answer: `
        const reverseString = (str) => str.split('').reverse().join('');
        console.log(reverseString('hello')); // Output: 'olleh'
      `,
      tip: 'Explain the use of `split`, `reverse`, and `join` methods.',
    },
    {
      question: 'How do you check if a number is prime in Python?',
      answer: `
        def is_prime(num):
            if num <= 1:
                return False
            for i in range(2, int(num**0.5) + 1):
                if num % i == 0:
                    return False
            return True

        print(is_prime(7)) # Output: True
      `,
      tip: 'Highlight the use of the square root optimization for better efficiency.',
    },
    {
      question:
        'How do you find the largest element in an array in JavaScript?',
      answer: `
        const largestElement = (arr) => Math.max(...arr);
        console.log(largestElement([10, 20, 30, 5])); // Output: 30
      `,
      tip: 'Discuss the spread operator and how it works with `Math.max`.',
    },
    {
      question: 'How do you remove duplicates from an array in JavaScript?',
      answer: `
        const removeDuplicates = (arr) => [...new Set(arr)];
        console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]
      `,
      tip: 'Mention the use of `Set` to handle unique values.',
    },
    {
      question:
        'How do you generate Fibonacci numbers using recursion in Python?',
      answer: `
        def fibonacci(n):
            if n <= 1:
                return n
            return fibonacci(n - 1) + fibonacci(n - 2)

        print(fibonacci(6)) # Output: 8
      `,
      tip: 'Warn about recursion depth limits and suggest memoization for optimization.',
    },
    {
      question: 'How do you check for a palindrome string in JavaScript?',
      answer: `
        const isPalindrome = (str) => {
            const reversed = str.split('').reverse().join('');
            return str === reversed;
        };
        console.log(isPalindrome('radar')); // Output: true
      `,
      tip: 'Explain reversing the string and comparing it with the original.',
    },
    {
      question: 'How do you find the factorial of a number in Python?',
      answer: `
        def factorial(n):
            if n == 0:
                return 1
            return n * factorial(n - 1)

        print(factorial(5)) # Output: 120
      `,
      tip: 'Explain how recursion works for factorial calculation.',
    },
    {
      question:
        'How do you sort an array of numbers in ascending order in JavaScript?',
      answer: `
        const sortArray = (arr) => arr.sort((a, b) => a - b);
        console.log(sortArray([5, 3, 8, 1])); // Output: [1, 3, 5, 8]
      `,
      tip: 'Discuss the importance of providing a comparator function.',
    },
    {
      question: 'How do you find the intersection of two arrays in JavaScript?',
      answer: `
        const intersection = (arr1, arr2) => arr1.filter((item) => arr2.includes(item));
        console.log(intersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]
      `,
      tip: 'Highlight the use of `filter` and `includes` methods.',
    },
    {
      question:
        'How do you find the missing number in an array of integers in Python?',
      answer: `
        def find_missing_number(arr, n):
            expected_sum = n * (n + 1) // 2
            actual_sum = sum(arr)
            return expected_sum - actual_sum

        print(find_missing_number([1, 2, 4, 5, 6], 6)) # Output: 3
      `,
      tip: 'Explain the formula for the sum of the first n natural numbers.',
    },
    {
      question: 'How do you flatten a nested array in JavaScript?',
      answer: `
        const flattenArray = (arr) => arr.flat(Infinity);
        console.log(flattenArray([1, [2, [3, [4]]]])); // Output: [1, 2, 3, 4]
      `,
      tip: 'Discuss the use of the `flat` method with the `Infinity` depth.',
    },
    {
      question:
        'How do you calculate the sum of all elements in an array in Python?',
      answer: `
        def array_sum(arr):
            return sum(arr)

        print(array_sum([1, 2, 3, 4])) # Output: 10
      `,
      tip: 'Use Python’s built-in `sum` function for simplicity.',
    },
    {
      question: 'How do you implement binary search in Python?',
      answer: `
        def binary_search(arr, target):
            low, high = 0, len(arr) - 1
            while low <= high:
                mid = (low + high) // 2
                if arr[mid] == target:
                    return mid
                elif arr[mid] < target:
                    low = mid + 1
                else:
                    high = mid - 1
            return -1

        print(binary_search([1, 2, 3, 4, 5], 3)) # Output: 2
      `,
      tip: 'Explain the importance of having a sorted array.',
    },
    {
      question:
        'How do you count the occurrences of each element in an array in JavaScript?',
      answer: `
        const countOccurrences = (arr) => arr.reduce((acc, item) => {
            acc[item] = (acc[item] || 0) + 1;
            return acc;
        }, {});
        console.log(countOccurrences([1, 2, 2, 3])); // Output: {1: 1, 2: 2, 3: 1}
      `,
      tip: 'Discuss the use of `reduce` to build a frequency object.',
    },
    {
      question: 'How do you implement a queue using a Python list?',
      answer: `
        class Queue:
            def __init__(self):
                self.items = []

            def enqueue(self, item):
                self.items.append(item)

            def dequeue(self):
                if not self.is_empty():
                    return self.items.pop(0)

            def is_empty(self):
                return len(self.items) == 0

        q = Queue()
        q.enqueue(1)
        q.enqueue(2)
        print(q.dequeue()) # Output: 1
      `,
      tip: 'Mention the inefficiency of using a list for large-scale queue operations.',
    },
    {
      question:
        'How do you swap two numbers without using a temporary variable in JavaScript?',
      answer: `
        let a = 5, b = 3;
        a = a + b;
        b = a - b;
        a = a - b;
        console.log(a, b); // Output: 3, 5
      `,
      tip: 'Discuss arithmetic operations and edge cases like overflow.',
    },
    {
      question: 'How do you find the GCD of two numbers in Python?',
      answer: `
        def gcd(a, b):
            while b:
                a, b = b, a % b
            return a

        print(gcd(48, 18)) # Output: 6
      `,
      tip: 'Highlight the use of the Euclidean algorithm.',
    },
    {
      question: 'How do you check if two strings are anagrams in JavaScript?',
      answer: `
        const areAnagrams = (str1, str2) => {
            const sortString = (str) => str.split('').sort().join('');
            return sortString(str1) === sortString(str2);
        };
        console.log(areAnagrams('listen', 'silent')); // Output: true
      `,
      tip: 'Mention the importance of sorting the strings.',
    },
    {
      question: 'How do you implement a stack using an array in Python?',
      answer: `
        class Stack:
            def __init__(self):
                self.items = []

            def push(self, item):
                self.items.append(item)

            def pop(self):
                if not self.is_empty():
                    return self.items.pop()

            def is_empty(self):
                return len(self.items) == 0

        s = Stack()
        s.push(1)
        s.push(2)
        print(s.pop()) # Output: 2
      `,
      tip: 'Discuss the simplicity of using Python lists for stack operations.',
    },
    {
      question:
        'How do you check if a string has balanced parentheses in JavaScript?',
      answer: `
        const isBalanced = (str) => {
            const stack = [];
            for (const char of str) {
                if (char === '(') stack.push(char);
                else if (char === ')') {
                    if (stack.length === 0) return false;
                    stack.pop();
                }
            }
            return stack.length === 0;
        };
        console.log(isBalanced('(())')); // Output: true
      `,
      tip: 'Explain the use of stacks for solving this problem.',
    },
    {
      question:
        'How do you find the nth Fibonacci number iteratively in Python?',
      answer: `
        def fibonacci(n):
            a, b = 0, 1
            for _ in range(n):
                a, b = b, a + b
            return a

        print(fibonacci(6)) # Output: 8
      `,
      tip: 'Compare the iterative method with recursion in terms of performance.',
    },
    {
      question:
        'How do you remove a specific element from an array in JavaScript?',
      answer: `
        const removeElement = (arr, value) => arr.filter((item) => item !== value);
        console.log(removeElement([1, 2, 3, 4], 3)); // Output: [1, 2, 4]
      `,
      tip: 'Mention the use of `filter` to exclude the specific element.',
    },
    {
      question: 'How do you merge two sorted arrays in Python?',
      answer: `
        def merge_arrays(arr1, arr2):
            result = []
            i, j = 0, 0
            while i < len(arr1) and j < len(arr2):
                if arr1[i] < arr2[j]:
                    result.append(arr1[i])
                    i += 1
                else:
                    result.append(arr2[j])
                    j += 1
            result.extend(arr1[i:])
            result.extend(arr2[j:])
            return result

        print(merge_arrays([1, 3, 5], [2, 4, 6])) # Output: [1, 2, 3, 4, 5, 6]
      `,
      tip: 'Explain how two pointers are used for efficient merging.',
    },
    {
      question: 'How do you generate permutations of a string in Python?',
      answer: `
        from itertools import permutations

        def generate_permutations(s):
            return [''.join(p) for p in permutations(s)]

        print(generate_permutations('abc'))
      `,
      tip: 'Mention the use of Python’s `itertools` library for this task.',
    },
    {
      question: 'How do you check if a number is a power of two in JavaScript?',
      answer: `
        const isPowerOfTwo = (num) => (num > 0) && ((num & (num - 1)) === 0);
        console.log(isPowerOfTwo(16)); // Output: true
      `,
      tip: 'Explain the use of bitwise operations to solve this problem.',
    },
    {
      question: 'How do you implement quicksort in Python?',
      answer: `
        def quicksort(arr):
            if len(arr) <= 1:
                return arr
            pivot = arr[len(arr) // 2]
            left = [x for x in arr if x < pivot]
            middle = [x for x in arr if x == pivot]
            right = [x for x in arr if x > pivot]
            return quicksort(left) + middle + quicksort(right)

        print(quicksort([3, 6, 8, 10, 1, 2, 1]))
      `,
      tip: 'Discuss the divide-and-conquer approach of quicksort.',
    },
    {
      question: 'How do you calculate the depth of a binary tree in Python?',
      answer: `
        class Node:
            def __init__(self, value):
                self.value = value
                self.left = None
                self.right = None

        def max_depth(root):
            if root is None:
                return 0
            left_depth = max_depth(root.left)
            right_depth = max_depth(root.right)
            return max(left_depth, right_depth) + 1

        root = Node(1)
        root.left = Node(2)
        root.right = Node(3)
        print(max_depth(root)) # Output: 2
      `,
      tip: 'Highlight the use of recursion for tree traversal.',
    },
    {
      question: 'How do you implement a simple hash table in Python?',
      answer: `
        class HashTable:
            def __init__(self):
                self.table = [None] * 10

            def _hash(self, key):
                return hash(key) % len(self.table)

            def insert(self, key, value):
                idx = self._hash(key)
                self.table[idx] = value

            def get(self, key):
                idx = self._hash(key)
                return self.table[idx]

        ht = HashTable()
        ht.insert('name', 'Alice')
        print(ht.get('name')) # Output: Alice
      `,
      tip: 'Discuss the importance of hash functions and collision handling.',
    },
    {
      question: 'What is the difference between SQL and NoSQL databases?',
      answer:
        'SQL databases are relational and use structured query language for defining and manipulating data, whereas NoSQL databases are non-relational and provide flexible data models.',
      tip: 'Provide examples of each (e.g., MySQL for SQL, MongoDB for NoSQL).',
    },
    {
      question: 'What is a deadlock in database systems?',
      answer:
        'A deadlock occurs when two or more transactions block each other by holding locks that the other transactions need to proceed.',
      tip: 'Explain deadlock detection and prevention methods.',
    },
    {
      question: 'What is a foreign key in a relational database?',
      answer:
        'A foreign key is a field in one table that uniquely identifies a row of another table, establishing a relationship between the two.',
      tip: 'Make sure to explain referential integrity and cascading updates/deletes.',
    },
    {
      question: 'What is the difference between an array and a linked list?',
      answer:
        'An array is a collection of elements stored in contiguous memory locations, whereas a linked list stores elements in nodes, with each node pointing to the next.',
      tip: 'Discuss the advantages of each, like array indexing versus linked list dynamic memory allocation.',
    },
    {
      question:
        'What is the difference between a shallow copy and a deep copy?',
      answer:
        'A shallow copy duplicates the references to the objects, while a deep copy duplicates the objects themselves, recursively copying all nested objects.',
      tip: 'Provide examples of when each type of copy is needed.',
    },
    {
      question: 'What is big O notation?',
      answer:
        'Big O notation is used to describe the performance or complexity of an algorithm in terms of time or space, focusing on its worst-case scenario.',
      tip: 'Be ready to explain common complexities like O(1), O(n), O(log n), O(n^2).',
    },
    {
      question: 'What is a graph in data structures?',
      answer:
        'A graph is a collection of nodes (vertices) connected by edges. It can be either directed or undirected and can have weighted or unweighted edges.',
      tip: 'Discuss various traversal algorithms, like Depth-First Search (DFS) and Breadth-First Search (BFS).',
    },
    {
      question: 'What is the difference between a for loop and a while loop?',
      answer:
        'A for loop is typically used when the number of iterations is known, while a while loop is used when the number of iterations is unknown or based on a condition.',
      tip: 'Provide examples to show when each loop is more appropriate.',
    },
    {
      question: 'Explain the concept of memory management in programming.',
      answer:
        'Memory management refers to the process of allocating and freeing memory in an efficient way, preventing memory leaks and fragmentation.',
      tip: 'Discuss automatic garbage collection and manual memory management.',
    },
    {
      question:
        'What is the purpose of a constructor in object-oriented programming?',
      answer:
        'A constructor is a special function used to initialize objects when they are created. It sets initial values for the object’s properties.',
      tip: 'Explain the differences between default and parameterized constructors.',
    },
    {
      question: 'What is the difference between a class and an interface?',
      answer:
        'A class defines the properties and behaviors of an object, while an interface defines a contract that classes can implement without providing implementation details.',
      tip: 'Make sure to explain the role of inheritance and polymorphism in object-oriented design.',
    },
    {
      question: 'What are the four pillars of object-oriented programming?',
      answer:
        'The four pillars of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism.',
      tip: 'Be prepared to discuss each concept with real-world examples.',
    },
    {
      question: 'What is an API?',
      answer:
        'An API (Application Programming Interface) is a set of rules that allow one software program to interact with another, defining the methods and data structures used for communication.',
      tip: 'Give examples of popular APIs like Twitter API or Google Maps API.',
    },
    {
      question: 'What is the difference between a thread and a process?',
      answer:
        'A process is an independent program in execution, while a thread is a smaller unit of a process that shares the same resources.',
      tip: 'Explain thread synchronization and concurrency issues.',
    },
    {
      question: 'What is the purpose of the "this" keyword in JavaScript?',
      answer:
        'The "this" keyword refers to the current context or the object the function is being called on.',
      tip: 'Explain how "this" works in different contexts like global scope, object methods, and event handlers.',
    },
    // Angular Questions
    {
      question: 'What is Angular?',
      answer:
        'Angular is a platform and framework for building single-page client applications using HTML, CSS, and JavaScript/TypeScript.',
      tip: 'Make sure to explain its components, services, and how it uses TypeScript.',
    },
    {
      question: 'What are Angular components?',
      answer:
        'Components are the fundamental building blocks of Angular applications. Each component consists of an HTML template, a CSS style, and a TypeScript class that defines the component’s behavior.',
      tip: 'Be sure to discuss how components interact with services and other components.',
    },
    {
      question: 'What is Angular’s two-way data binding?',
      answer:
        'Two-way data binding in Angular refers to the synchronization of data between the model and the view. Changes in the model reflect in the view and vice versa.',
      tip: 'Use examples such as the ngModel directive in forms to explain this.',
    },
    {
      question: 'What is Angular Dependency Injection?',
      answer:
        'Dependency Injection (DI) is a design pattern in Angular where services or dependencies are injected into components or other services, making them more modular and testable.',
      tip: 'Be ready to explain how Angular’s DI system works using providers.',
    },
    {
      question: 'What is RxJS in Angular?',
      answer:
        'RxJS (Reactive Extensions for JavaScript) is a library for composing asynchronous and event-based programs using observable sequences.',
      tip: 'Discuss Observables, Operators, and how they are used in Angular for handling HTTP requests and event streams.',
    },

    // React Questions
    {
      question: 'What is React?',
      answer:
        'React is a JavaScript library for building user interfaces, especially single-page applications. It allows developers to build reusable UI components.',
      tip: 'Explain JSX and the virtual DOM concept.',
    },
    {
      question: 'What is JSX?',
      answer:
        'JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. React uses JSX to define UI components.',
      tip: 'Ensure to explain that JSX is eventually transpiled to JavaScript.',
    },
    {
      question: 'What are React hooks?',
      answer:
        'React hooks are functions that let you use state and other React features in functional components, which were previously only available in class components.',
      tip: 'Mention common hooks like useState, useEffect, and useContext.',
    },
    {
      question: 'What is the difference between state and props in React?',
      answer:
        'State is data that is managed within a component, while props are data passed from parent components to child components.',
      tip: 'Use examples to show the flow of data between components.',
    },
    {
      question: 'What is the virtual DOM in React?',
      answer:
        'The virtual DOM is a lightweight representation of the actual DOM. React updates the virtual DOM first and then compares it with the real DOM to optimize performance.',
      tip: 'Explain how React uses a diffing algorithm to efficiently update the UI.',
    },

    // Flutter Questions
    {
      question: 'What is Flutter?',
      answer:
        'Flutter is an open-source UI framework by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.',
      tip: 'Explain how Flutter uses Dart as its programming language and the widget-based architecture.',
    },
    {
      question: 'What are Flutter widgets?',
      answer:
        'In Flutter, everything is a widget. Widgets are the building blocks of a Flutter app’s user interface, and they are used to describe the structure of the UI.',
      tip: 'Be sure to differentiate between stateless and stateful widgets.',
    },
    {
      question: 'What is a stateless widget in Flutter?',
      answer:
        'A stateless widget is a widget that does not maintain any state. Its appearance is determined solely by the configuration information it receives.',
      tip: 'Explain the use case of stateless widgets, such as static UI elements.',
    },
    {
      question: 'What is a stateful widget in Flutter?',
      answer:
        'A stateful widget is a widget that maintains state that may change during the widget’s lifetime, causing it to rebuild when the state changes.',
      tip: 'Discuss how StatefulWidget and State classes work together.',
    },
    {
      question: 'How does Flutter handle layouts?',
      answer:
        'Flutter uses a flexible layout system that involves widgets such as Row, Column, Stack, and others for positioning and sizing UI elements.',
      tip: 'Discuss the BoxConstraints and how Flutter’s layout engine works.',
    },

    // Backend Questions (Node.js, Express, Databases, etc.)
    {
      question: 'What is Node.js?',
      answer:
        "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, allowing for server-side scripting with JavaScript.",
      tip: 'Explain how Node.js is single-threaded and event-driven.',
    },
    {
      question: 'What is Express.js?',
      answer:
        'Express.js is a minimal and flexible Node.js web application framework that provides a set of tools to build web applications.',
      tip: 'Discuss routing, middleware, and request handling in Express.',
    },
    {
      question: 'What is middleware in Express?',
      answer:
        'Middleware in Express is a function that has access to the request, response, and the next middleware in the application’s request-response cycle.',
      tip: 'Explain how middleware can modify requests and responses or terminate the request-response cycle.',
    },
    {
      question: 'What is RESTful API design?',
      answer:
        'RESTful API design is an architectural style for designing networked applications, emphasizing stateless communication and HTTP methods like GET, POST, PUT, DELETE.',
      tip: 'Discuss endpoints, status codes, and the importance of statelessness.',
    },
    {
      question: 'What is JWT (JSON Web Token)?',
      answer:
        'JWT is a compact, URL-safe means of representing claims to be transferred between two parties. It is commonly used for authentication in web applications.',
      tip: 'Explain how JWT works and how it’s used for session management and security.',
    },
    {
      question: 'What is the difference between SQL and NoSQL databases?',
      answer:
        'SQL databases are structured, relational databases with a predefined schema, whereas NoSQL databases are non-relational and allow for more flexible, dynamic schemas.',
      tip: 'Provide examples of each, such as MySQL (SQL) and MongoDB (NoSQL).',
    },
    {
      question: 'What are REST APIs, and why are they important?',
      answer:
        'REST (Representational State Transfer) APIs allow communication between clients and servers over HTTP, making it easy to develop scalable and stateless web services.',
      tip: 'Discuss the importance of REST in modern web development and its advantages over other architectures.',
    },
    {
      question: 'What are the benefits of using MongoDB?',
      answer:
        'MongoDB is a NoSQL, document-based database known for scalability, flexibility, and high performance. It stores data in JSON-like format, making it ideal for dynamic applications.',
      tip: 'Discuss its schema-less nature and how it compares to traditional relational databases.',
    },
    {
      question: 'What is CORS in web development?',
      answer:
        'CORS (Cross-Origin Resource Sharing) is a security feature that allows or denies web pages from making requests to a domain different from the one that served the web page.',
      tip: 'Explain how CORS works and how to handle it in a Node.js/Express app.',
    },
    {
      question: 'What is Docker?',
      answer:
        'Docker is a platform that enables developers to automate the deployment of applications in lightweight, portable containers.',
      tip: 'Discuss containerization benefits and how it simplifies app deployment across environments.',
    },
  ];

  behavioralQuestions = [
    {
      question: 'Tell me about a time you overcame a challenge.',
      answer:
        'I faced a challenge during a project deadline, and I worked extra hours to complete the task on time.',
      tip: 'Use the STAR method (Situation, Task, Action, Result).',
    },
    {
      question: 'How do you handle criticism?',
      answer:
        'I listen to feedback carefully and work on areas where I can improve.',
      tip: 'Be honest and focus on growth mindset.',
    },
    {
      question: 'Give an example of a leadership experience.',
      answer:
        'I led a team to successfully complete a project under tight deadlines.',
      tip: 'Focus on your problem-solving and team management skills.',
    },

    {
      question:
        'Tell me about a time when you worked on a project that required collaboration with others.',
      answer:
        'I worked with a cross-functional team to develop a new feature. We held regular meetings to ensure alignment and shared updates, which led to a successful launch.',
      tip: 'Highlight your ability to collaborate and communicate with diverse teams.',
    },
    {
      question:
        'Give an example of a time you had to adapt your communication style to work with someone.',
      answer:
        'I adapted my communication style by using more visual aids and simple language when working with a colleague who was new to the topic.',
      tip: 'Show how you adjust to different communication styles based on your audience.',
    },
    {
      question:
        'Tell me about a time when you had to quickly learn a new tool or technology.',
      answer:
        'I had to quickly learn a new project management tool. I took an online course and practiced with a mock project, which helped me become proficient in a short time.',
      tip: 'Focus on your ability to learn and adapt to new technologies quickly.',
    },
    {
      question:
        'Tell me about a time you had to deal with an unexpected situation at work.',
      answer:
        'An unexpected server outage occurred, and I worked with the IT team to identify the problem, communicated with clients about the delay, and helped resolve the issue as quickly as possible.',
      tip: 'Demonstrate your ability to think on your feet and solve problems under pressure.',
    },
    {
      question: 'Describe a time when you improved team performance.',
      answer:
        'I identified inefficiencies in our workflow and proposed a new system for tracking tasks, which led to faster completion times and increased team productivity.',
      tip: 'Highlight your ability to analyze situations and implement solutions to improve performance.',
    },
    {
      question:
        'Tell me about a time when you had to motivate yourself to complete a difficult task.',
      answer:
        'I had a tight deadline for a project, so I set small milestones and rewarded myself after completing each one, which kept me motivated to finish the task.',
      tip: 'Focus on self-motivation techniques and how you stay focused on goals.',
    },
    {
      question: 'Describe a time when you helped resolve a conflict in a team.',
      answer:
        'I mediated a disagreement between two team members by listening to their concerns, ensuring everyone’s opinion was heard, and helping them find common ground.',
      tip: 'Show your conflict resolution skills and ability to foster collaboration.',
    },
    {
      question:
        'Tell me about a time you worked on a project with a tight budget.',
      answer:
        'I worked on a marketing campaign with a limited budget. I prioritized high-impact activities and found creative ways to achieve results without overspending.',
      tip: 'Focus on resourcefulness and managing projects with constraints.',
    },
    {
      question:
        'Give an example of a time you had to make a difficult decision.',
      answer:
        'I had to choose between two candidates for a role, and after carefully reviewing their skills and the team’s needs, I selected the best fit for the position.',
      tip: 'Discuss how you weigh pros and cons and make thoughtful decisions.',
    },
    {
      question:
        'Describe a time when you worked on a project with conflicting priorities.',
      answer:
        'I worked on two high-priority projects at the same time, so I communicated with both teams to manage expectations and set realistic deadlines.',
      tip: 'Show your ability to manage competing priorities and handle pressure.',
    },
    {
      question:
        'Tell me about a time you had to take responsibility for something that went wrong.',
      answer:
        'I was responsible for a mistake in a report, and I took full accountability, rectified the issue, and communicated the changes to the team.',
      tip: 'Focus on your integrity and responsibility in the face of mistakes.',
    },
    {
      question:
        'Tell me about a time you had to balance multiple tasks at once.',
      answer:
        'I handled multiple customer inquiries while managing my project tasks. I stayed organized, used a task management tool, and prioritized based on urgency.',
      tip: 'Emphasize your multitasking skills and organizational abilities.',
    },
    {
      question:
        'Tell me about a time when you had to step outside your comfort zone.',
      answer:
        'I was asked to lead a presentation for the first time. I practiced extensively and pushed myself to overcome my nervousness, and it turned out to be a great success.',
      tip: 'Show your willingness to take on challenges and grow personally and professionally.',
    },
    {
      question:
        'Tell me about a time you helped a colleague improve their performance.',
      answer:
        'A colleague was struggling with a task, so I spent time explaining the steps, shared resources with them, and checked in to offer further support.',
      tip: 'Highlight your mentorship and support skills.',
    },
    {
      question:
        'Tell me about a time when you had to make a decision based on limited data.',
      answer:
        'I had to decide on a marketing strategy with limited customer data. I used existing trends, market research, and feedback from the team to make an informed decision.',
      tip: 'Focus on how you make calculated decisions despite uncertainty.',
    },
    {
      question:
        'Tell me about a time when you had to collaborate with others who had a different working style.',
      answer:
        'I collaborated with a colleague who preferred detailed planning while I leaned towards flexibility. We found a balance by combining structured milestones with room for adjustments.',
      tip: 'Show your ability to work with diverse personalities and approaches.',
    },
    {
      question:
        'Give an example of a time you demonstrated a strong work ethic.',
      answer:
        'I worked overtime to complete an important report for a client, ensuring the work was thorough and of high quality, even under pressure.',
      tip: 'Highlight your dedication to delivering high-quality results on time.',
    },
    {
      question: 'Describe a situation where you had to motivate a team member.',
      answer:
        'A team member was struggling with a task, so I encouraged them, offered to help with the workload, and reminded them of the importance of the task to the team’s success.',
      tip: 'Focus on how you positively influence others and keep them motivated.',
    },
    {
      question: 'Tell me about a time you had to manage a difficult deadline.',
      answer:
        'I had a project with a challenging deadline, so I broke the project into manageable tasks, communicated effectively with the team, and ensured timely delivery.',
      tip: 'Discuss your time management and planning skills under pressure.',
    },
    {
      question:
        'Tell me about a time when you successfully dealt with ambiguity.',
      answer:
        'When given a new project with unclear guidelines, I reached out to stakeholders for clarification, gathered available data, and created a clear plan based on the available information.',
      tip: 'Show how you handle uncertain situations and move forward with clarity.',
    },
    {
      question:
        'Give an example of a time when you had to work with minimal supervision.',
      answer:
        'I was assigned a task with minimal guidance. I took the initiative to research, prioritize tasks, and completed the work without needing constant oversight.',
      tip: 'Emphasize your ability to work independently and manage your responsibilities.',
    },
    {
      question:
        'Describe a time when you faced conflicting feedback from different team members.',
      answer:
        'I received conflicting feedback on a project. I organized a meeting to clarify expectations, gathered more insights from both sides, and merged the suggestions to improve the project.',
      tip: 'Show your ability to navigate conflicting opinions and find a balanced solution.',
    },
    {
      question:
        'Tell me about a time when you had to work with a challenging client.',
      answer:
        'I worked with a challenging client who had changing requirements. I managed their expectations through regular updates and ensured that we delivered according to their evolving needs.',
      tip: 'Focus on your customer service skills and ability to maintain professional relationships.',
    },
    {
      question:
        'Give an example of a time when you had to resolve a problem creatively.',
      answer:
        'I had to find a cost-effective solution for a project. I brainstormed ideas with my team and proposed a new approach that saved us money while still meeting the project requirements.',
      tip: 'Highlight your creativity and problem-solving ability in practical situations.',
    },
    {
      question: 'Describe a time when you worked with a difficult team member.',
      answer:
        'I addressed the issue through open communication and collaboration, helping the team member understand the project requirements.',
      tip: 'Focus on conflict resolution and communication skills.',
    },
    {
      question: 'Tell me about a time you made a mistake at work.',
      answer:
        'I made an error in a report, and I took responsibility, corrected it, and put in place new checks to prevent it from happening again.',
      tip: 'Emphasize accountability and learning from mistakes.',
    },
    {
      question: 'Tell me about a time you had to manage multiple priorities.',
      answer:
        'I organized my tasks by urgency and importance, delegated when possible, and stayed focused to meet all deadlines.',
      tip: 'Demonstrate your time management and prioritization skills.',
    },
    {
      question: 'How do you handle stressful situations?',
      answer:
        'I take a deep breath, break down the task into manageable parts, and focus on one thing at a time.',
      tip: 'Talk about staying calm under pressure and problem-solving.',
    },
    {
      question: 'Give an example of a time when you showed initiative.',
      answer:
        'I noticed a gap in our workflow and proposed a new process that improved efficiency and reduced errors.',
      tip: 'Emphasize your proactive approach to problem-solving.',
    },
    {
      question:
        'Tell me about a time when you had to learn something new quickly.',
      answer:
        'I had to learn a new software tool for a project, so I dedicated time each day to practice and got up to speed quickly.',
      tip: 'Demonstrate adaptability and a willingness to learn.',
    },
    {
      question: 'Describe a situation where you had to make a quick decision.',
      answer:
        'I had to choose between two project approaches with limited information, so I used available data and team input to make the best decision.',
      tip: 'Focus on your decision-making process under pressure.',
    },
    {
      question:
        'Tell me about a time you worked on a project with tight deadlines.',
      answer:
        'I broke the project into smaller tasks, collaborated with my team to delegate work, and we delivered on time.',
      tip: 'Show your ability to work efficiently and manage time effectively.',
    },
    {
      question:
        'Describe a time when you had to adapt to a significant change at work.',
      answer:
        'When the company switched to remote work, I quickly adapted by setting up a home office and improving my communication with the team.',
      tip: 'Highlight your flexibility and ability to adapt to new situations.',
    },
    {
      question:
        'Give an example of a time when you disagreed with a supervisor.',
      answer:
        'I disagreed with my supervisor on a project approach, but we had a discussion, and I presented my ideas, which led to a better solution.',
      tip: 'Focus on respectful communication and problem-solving.',
    },
    {
      question: 'Tell me about a time you had to handle a difficult customer.',
      answer:
        'A customer was unhappy with a service, so I listened to their concerns, empathized, and provided a solution that satisfied them.',
      tip: 'Emphasize customer service skills and empathy.',
    },
    {
      question:
        'Tell me about a time you had to work in a team to achieve a goal.',
      answer:
        'Our team collaborated on a product launch, sharing responsibilities and working together to meet all milestones.',
      tip: 'Show your teamwork and collaboration skills.',
    },
    {
      question: 'Describe a time when you showed resilience in the workplace.',
      answer:
        'After a project failure, I kept a positive attitude, learned from the experience, and contributed to the team’s recovery effort.',
      tip: 'Discuss your perseverance and ability to bounce back from setbacks.',
    },
    {
      question:
        'Tell me about a time you had to explain something complex to a non-expert.',
      answer:
        'I explained a technical issue to a non-technical colleague by breaking it down into simpler terms and using analogies.',
      tip: 'Focus on your communication and teaching skills.',
    },
    {
      question: 'Tell me about a time you had to motivate a team.',
      answer:
        'When the team faced a challenge, I helped by maintaining morale, reminding everyone of our shared goal, and supporting them through tough tasks.',
      tip: 'Highlight your leadership and motivational skills.',
    },
    {
      question:
        'Describe a time when you had to make a decision without all the necessary information.',
      answer:
        'I had to make a decision based on limited data, so I relied on my experience and consulted with the team before making the best possible choice.',
      tip: 'Show how you handle uncertainty and make informed decisions.',
    },
    {
      question:
        'Tell me about a time when you had to balance work and personal life.',
      answer:
        'I learned to set clear boundaries and manage my time effectively so that I could maintain a healthy work-life balance.',
      tip: 'Discuss how you prioritize and set boundaries for work and life.',
    },
    {
      question:
        'Tell me about a time you had to work with a team from different cultural backgrounds.',
      answer:
        'I worked with a multicultural team and ensured open communication, embracing diverse perspectives for better problem-solving.',
      tip: 'Show your cultural awareness and teamwork in diverse settings.',
    },
    {
      question: 'Describe a time when you improved a process at work.',
      answer:
        'I identified a bottleneck in our process and implemented a solution that streamlined the workflow, improving efficiency by 30%.',
      tip: 'Highlight your problem-solving and process improvement skills.',
    },
    {
      question: 'Give an example of a time when you had to deliver bad news.',
      answer:
        'I had to inform a client about a delay, and I did so honestly, explaining the situation and offering alternatives to address the issue.',
      tip: 'Discuss your communication skills and handling difficult conversations.',
    },
    {
      question:
        'Tell me about a time when you had to work with limited resources.',
      answer:
        'I successfully completed a project with limited resources by creatively prioritizing and leveraging the available tools and team strengths.',
      tip: 'Emphasize resourcefulness and creativity in problem-solving.',
    },
    {
      question: 'Tell me about a time you exceeded expectations.',
      answer:
        'I exceeded expectations by completing a project ahead of schedule, improving its quality through additional research and attention to detail.',
      tip: 'Show how you go above and beyond to deliver results.',
    },
    {
      question: 'Describe a time when you had to meet a target.',
      answer:
        'I set clear goals, tracked my progress, and worked efficiently to meet the target ahead of time.',
      tip: 'Focus on goal setting, planning, and achievement.',
    },
    {
      question: 'Tell me about a time when you took ownership of a project.',
      answer:
        'I led a project from start to finish, ensuring all deliverables were met on time and within budget.',
      tip: 'Highlight your initiative and responsibility.',
    },
    {
      question:
        'Tell me about a time you had to deal with conflict within a team.',
      answer:
        'I mediated a conflict by encouraging open communication, listening to all sides, and finding a compromise that worked for everyone.',
      tip: 'Focus on conflict resolution and maintaining team harmony.',
    },
  ];
  isCodeAnswer(answer: string): boolean {
    // Check if the answer starts with a typical code keyword, or contains code patterns.
    // You can adjust this condition based on your needs (e.g., checking for 'def', 'function', etc.).
    return (
      answer.trim().startsWith('def') ||
      answer.trim().startsWith('function') ||
      answer.trim().includes('{')
    );
  }

  ngOnInit(): void {
    this.updateQuestions();
  }

  updateQuestions(): void {
    if (this.selectedInterviewType === 'technical') {
      this.questions = this.technicalQuestions;
    } else {
      this.questions = this.behavioralQuestions;
    }
    this.currentQuestionIndex = 0; // Reset to the first question whenever the type changes
  }

  goToNextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  goToPreviousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  ngOnChanges(): void {
    this.updateQuestions();
  }
  getVideoUrl() {
    const videoUrls = {
      technical:
        'https://www.youtube.com/embed/n9baKDP91ko?si=tQ5WtOzL4_5sEOHV',
      behavioral:
        'https://www.youtube.com/embed/IV30jAw7dxA?si=78miJfxBGD15KdXR',
    };

    // Use DomSanitizer to bypass Angular's security check
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.selectedVideoType === 'technical'
        ? videoUrls.technical
        : videoUrls.behavioral
    );
  }
}
