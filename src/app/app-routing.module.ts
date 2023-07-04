import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseFormatsComponent } from './course-formats/course-formats.component';
import { FormatDetailsComponent } from './format-details/format-details.component';

const routes: Routes = [{
  path: "", component: CourseFormatsComponent
},{
  path: "format/:id", component: FormatDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
