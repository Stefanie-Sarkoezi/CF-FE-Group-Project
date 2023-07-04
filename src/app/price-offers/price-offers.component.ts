import { Component } from '@angular/core';
import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-price-offers',
  templateUrl: './price-offers.component.html',
  styleUrls: ['./price-offers.component.scss'],
})
export class PriceOffersComponent {
  constructor(private readonly coursesService: CoursesService) {}

  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }
}
