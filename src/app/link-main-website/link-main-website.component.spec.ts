import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkMainWebsiteComponent } from './link-main-website.component';

describe('LinkMainWebsiteComponent', () => {
  let component: LinkMainWebsiteComponent;
  let fixture: ComponentFixture<LinkMainWebsiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkMainWebsiteComponent]
    });
    fixture = TestBed.createComponent(LinkMainWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
