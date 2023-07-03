import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseTopicComponent } from './course-topic/course-topic.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { InfoCourseTechnologiesComponent } from './info-course-technologies/info-course-technologies.component';
import { InfoTeacherComponent } from './info-teacher/info-teacher.component';
import { InfoCourseSpaceComponent } from './info-course-space/info-course-space.component';
import { VideosComponent } from './videos/videos.component';
import { NewsComponent } from './news/news.component';
import { PriceOffersComponent } from './price-offers/price-offers.component';
import { CourseFormatsComponent } from './course-formats/course-formats.component';
import { LinkMainWebsiteComponent } from './link-main-website/link-main-website.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CourseTopicComponent,
    TestimonialsComponent,
    InfoCourseTechnologiesComponent,
    InfoTeacherComponent,
    InfoCourseSpaceComponent,
    VideosComponent,
    NewsComponent,
    PriceOffersComponent,
    CourseFormatsComponent,
    LinkMainWebsiteComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
