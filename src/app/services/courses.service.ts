import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({ providedIn: 'root' })
export class CoursesService {
  private courses: Course[] = [
    {
      name: 'Introduction to Python Programming',
      level: 'Intro',
      price: 500,
      duration: '2 Weeks',
      description: `Are you curious about programming and want to embark on a journey to learn a powerful and versatile programming language? Look no further than our "Introduction to Python Programming" course! In just two weeks, you'll gain a solid foundation in Python and develop the skills necessary to pursue further programming endeavors.`,
      schedule: `Week 1: Foundations of Python Programming
      In the first week, we will focus on building a strong foundation in Python programming concepts. You'll learn about variables, data types, operators, control structures (such as loops and conditionals), and functions. Through interactive lectures, live coding demonstrations, and interactive coding exercises, you'll gain hands-on experience and gradually develop your coding skills.

      Week 2: Practical Applications and Project-based Learning
      In the second week, we'll dive into practical applications of Python. You'll explore file handling, data manipulation, and learn how to interact with external libraries and APIs. We'll introduce you to the power of Python in various domains such as web development, data analysis, and automation. During this week, you'll also work on a project of your choice, applying the skills you've learned to build a small-scale application or solve a real-world problem.`,

      requirements:
        'No prior programming experience is required for this course. However, basic computer literacy and familiarity with using a computer are recommended',
    },
    {
      name: 'Development with JavaScript and React',
      level: 'Basic',
      price: 2000,
      duration: '1 Month',
      description: `Are you eager to dive into the world of web development and create interactive websites? Look no further than our "Web Development with JavaScript and React" course! You'll learn the fundamentals of JavaScript programming language and the React framework, empowering you to build modern and engaging web applications.`,
      schedule: `Week 1: JavaScript Foundations
      In the first week, we will cover the basics of JavaScript programming. You'll learn about variables, data types, control structures, functions, and object-oriented programming principles. Through interactive coding exercises and projects, you'll develop a strong foundation in JavaScript syntax and concepts.
      
      Week 2: Intermediate JavaScript Concepts
      Building upon your knowledge from week one, we'll delve into more advanced JavaScript topics. This week will focus on DOM manipulation, event handling, asynchronous programming with Promises, and working with APIs. You'll gain hands-on experience by developing interactive web pages and interacting with external data sources.
      
      Week 3: Introduction to React
      In week three, we'll introduce you to the React framework. You'll learn about component-based architecture, JSX syntax, state management, and handling user input. By the end of this week, you'll be able to create and deploy your own React applications, incorporating reusable components and implementing dynamic UI elements.
      
      Week 4: Building React Applications
      During the final week, we'll dive deeper into React development. We'll explore routing, managing application state with context or Redux, and working with external libraries and APIs to enhance your applications. You'll work on a final project, applying your knowledge of JavaScript and React to create a fully functional web application.`,

      requirements: `No prior coding experience is required for this course. However, basic computer literacy and familiarity with HTML and CSS will be beneficial.`,
    },
    {
      name: 'Advanced Cyber Security Course',
      level: 'Advanced',
      price: 4500,
      duration: '3 Months',
      description: `Are you passionate about protecting digital systems and networks from cyber threats? Take your cyber security skills to the next level with our "Advanced Cyber Security" course. Designed for aspiring professionals in the field, this immersive program will equip you with knowledge, techniques, and tools to combat cyber threats effectively.`,
      schedule: `Month 1: Foundations of Cyber Security
      Week 1: Introduction to Cyber Security
      In the first week, we'll explore the foundations of cyber security. You'll gain an understanding of the threat landscape, cybersecurity principles, and the legal and ethical considerations of the field.
      
      Week 2: Secure Coding and Web Application Security
      Building upon your programming knowledge, this week will focus on secure coding practices and web application security. You'll learn how to identify and mitigate common vulnerabilities in code, such as cross-site scripting (XSS) and SQL injection. We'll also delve into security-oriented programming languages, including Python, and explore their application in developing secure software.
      
      Week 3: Network Security and Ethical Hacking
      In this week, we'll cover network fundamentals, protocols, and topologies. You'll learn about TCP/IP, DNS, VPNs, firewalls, and intrusion detection systems (IDS). We'll also introduce you to ethical hacking and penetration testing, where you'll learn how to identify vulnerabilities in systems and networks, exploit them responsibly, and propose appropriate countermeasures.
      
      Week 4: Cryptography and Secure Communications
      This week will focus on the fundamental principles of cryptography, including encryption, decryption, symmetric and asymmetric algorithms, and key management. You'll explore secure communication protocols and gain hands-on experience in implementing secure communication channels.
      
      Month 2: Advanced Cyber Security Topics
      Week 1: Incident Response and Digital Forensics
      During this week, you'll learn about incident response methodologies, digital forensics techniques, and the legal aspects of collecting and analyzing digital evidence. We'll simulate realistic scenarios, allowing you to apply incident response and forensics skills.
      
      Week 2: Cloud Security and Threat Intelligence
      We'll delve into cloud security architectures, secure configuration and access management, and virtualization vulnerabilities. You'll also learn about threat intelligence gathering, analysis, and sharing to proactively defend against cyber threats.
      
      Week 3: Network Defense and Intrusion Detection
      You'll explore advanced network defense techniques, including network segmentation, intrusion detection and prevention systems (IDPS), and network traffic analysis. Hands-on labs will allow you to practice configuring and deploying these defensive measures.
      
      Week 4: Vulnerability Assessment and Penetration Testing
      In this week, you'll learn about vulnerability assessment tools and techniques, conduct penetration tests, and identify vulnerabilities in complex systems. You'll also gain insights into reporting findings and providing recommendations for remediation.
      
      Month 3: Advanced Cyber Security Technologies
      Week 1: Security Operations and SIEM
      This week will focus on security operation center (SOC) principles, security monitoring, incident response automation, and the use of security information and event management (SIEM) systems to detect and respond to security incidents effectively.
      
      Week 2: Wireless and Mobile Security
      You'll dive into the intricacies of wireless network security, mobile application vulnerabilities, secure coding for mobile platforms, and techniques to protect against mobile malware and data breaches.
      
      Week 3: Advanced Persistent Threats and Threat Hunting
      In this week, we'll explore advanced persistent threats (APTs), threat hunting methodologies, and the use of advanced tools and techniques to detect and mitigate sophisticated cyber attacks.
      
      Week 4: Cyber Security Capstone Project
      During the final week, you'll work on a comprehensive capstone project that integrates the knowledge and skills gained throughout the course. You'll tackle a real-world cyber security challenge, applying advanced techniques to analyze, detect, and mitigate threats.`,

      requirements: `This is an advanced-level course designed for individuals with prior knowledge and experience in cyber security fundamentals. A strong understanding of networking, programming, and operating systems is recommended.`,
    },
  ];

  getCourses(): Course[] {
    //shallow copy
    return this.courses.slice();
  }

  addCourse(): void {
    // ...
  }
}
