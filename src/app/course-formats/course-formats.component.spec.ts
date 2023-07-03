import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormatsComponent } from './course-formats.component';

describe('CourseFormatsComponent', () => {
  let component: CourseFormatsComponent;
  let fixture: ComponentFixture<CourseFormatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseFormatsComponent]
    });
    fixture = TestBed.createComponent(CourseFormatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
