import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatDetailsComponent } from './format-details.component';

describe('FormatDetailsComponent', () => {
  let component: FormatDetailsComponent;
  let fixture: ComponentFixture<FormatDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormatDetailsComponent]
    });
    fixture = TestBed.createComponent(FormatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
