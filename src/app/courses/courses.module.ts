import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { LoadMoreComponent } from './load-more/load-more.component';

@NgModule({
  declarations: [CoursesPageComponent, CourseItemComponent, LoadMoreComponent],
  imports: [
    CommonModule
  ],
exports: [CoursesPageComponent]
})
export class CoursesModule { }
