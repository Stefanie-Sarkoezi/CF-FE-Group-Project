import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCourseSpaceComponent } from './info-course-space.component';

describe('InfoCourseSpaceComponent', () => {
  let component: InfoCourseSpaceComponent;
  let fixture: ComponentFixture<InfoCourseSpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoCourseSpaceComponent]
    });
    fixture = TestBed.createComponent(InfoCourseSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
