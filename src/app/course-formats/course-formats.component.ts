import { Component } from '@angular/core';
import { formats } from '../formats';
import { Iformats } from '../Iformats';

@Component({
  selector: 'app-course-formats',
  templateUrl: './course-formats.component.html',
  styleUrls: ['./course-formats.component.scss']
})
export class CourseFormatsComponent {
  formats : Iformats[] = formats;
}
