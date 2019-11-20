import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { ColorBorderDirective } from './course-item/color-border.directive';
import { NoDataComponent } from './no-data/no-data.component';
import { CourseDurationPipe } from './course-duration.pipe';
import { SearchCoursePipe } from './courses-page/search-course.pipe';
import { DeleteCourseModalComponent } from './delete-course-modal/delete-course-modal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CoursesPageComponent,
    CourseItemComponent,
    LoadMoreComponent,
    ColorBorderDirective,
    NoDataComponent,
    CourseDurationPipe,
    SearchCoursePipe,
    DeleteCourseModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
exports: [CoursesPageComponent, SearchCoursePipe, CourseDurationPipe]
})
export class CoursesModule { }
