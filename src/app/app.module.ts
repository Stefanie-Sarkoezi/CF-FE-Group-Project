import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseTopicComponent } from './course-topic/course-topic.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { InfoCourseTechnologiesComponent } from './info-course-technologies/info-course-technologies.component';
import { InfoTeacherComponent } from './info-teacher/info-teacher.component';
import { VideosComponent } from './videos/videos.component';
import { NewsComponent } from './news/news.component';
import { PriceOffersComponent } from './price-offers/price-offers.component';
import { CourseFormatsComponent } from './course-formats/course-formats.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormatDetailsComponent } from './format-details/format-details.component';
import { ScrollToTopButtonComponent } from './scroll-to-top-button/scroll-to-top-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CourseTopicComponent,
    TestimonialsComponent,
    InfoCourseTechnologiesComponent,
    InfoTeacherComponent,
    VideosComponent,
    NewsComponent,
    PriceOffersComponent,
    CourseFormatsComponent,
    FooterComponent,
    HeaderComponent,
    FormatDetailsComponent,
    ScrollToTopButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
