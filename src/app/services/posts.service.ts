import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [
    {
      headline: `Unlocking the Power of the Digital Era: Why Programming and Coding Skills are Essential in Today's World`,
      date: ``,
      image01: `../../assets/images/coding_01.jpg`,
      image02: `../../assets/images/coding_02.jpg`,
      image03: `../../assets/images/coding_03.jpg`,

      content01: `In the fast-paced, technology-driven world we live in today, possessing programming and coding skills has become increasingly crucial. Whether you're a student, a professional, or an entrepreneur, having a solid skillset in programming opens up a world of opportunities and empowers you to thrive in the digital era.

      First and foremost, programming and coding skills provide a gateway to numerous lucrative career paths. From software development and web design to data analysis and artificial intelligence, the demand for skilled programmers continues to skyrocket. With the rapid advancement of automation and artificial intelligence, traditional job roles are evolving, and employers are seeking individuals who possess the ability to navigate and contribute to this digital landscape.
      
      Moreover, programming skills foster creativity and problem-solving abilities. As technology becomes integrated into every aspect of our lives, having the ability to understand and manipulate code empowers individuals to bring their innovative ideas to life. From developing mobile applications that revolutionize industries to creating websites that provide unique user experiences, coding skills give individuals the power to shape the future.`,

      content02: `Furthermore, learning to code enhances critical thinking and logical reasoning. Programming requires breaking down complex problems into smaller, manageable parts, and developing step-by-step solutions. This analytical mindset nurtures a systematic approach to problem-solving that can be applied to various domains of life, not just within the realm of programming itself.
      
      Lastly, programming and coding skills promote digital literacy and provide individuals with the ability to adapt to the ever-changing technological landscape. In an era where digital devices and software applications are ubiquitous, understanding the fundamentals of programming allows individuals to leverage technology to their advantage. Whether it's automating repetitive tasks, building personal websites, or developing custom software solutions, coding skills enable individuals to harness technology's full potential.
      
      In conclusion, acquiring programming and coding skills is no longer just an option; it is a necessity in today's digital age. The ability to understand, create, and manipulate code opens up a world of career opportunities, fosters creativity and problem-solving, enhances critical thinking, and promotes digital literacy. Embrace the power of programming, and unlock your potential in the digital era.`,

      link: `Learn to code and shape your future!`,
    },
  ];

  getPosts(): Post[] {
    // shallow copy cause gud
    return this.posts.slice();
  }

  addPosts(): void {
    // ...
  }
}
