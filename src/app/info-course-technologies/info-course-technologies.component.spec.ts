import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCourseTechnologiesComponent } from './info-course-technologies.component';

describe('InfoCourseTechnologiesComponent', () => {
  let component: InfoCourseTechnologiesComponent;
  let fixture: ComponentFixture<InfoCourseTechnologiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoCourseTechnologiesComponent]
    });
    fixture = TestBed.createComponent(InfoCourseTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
