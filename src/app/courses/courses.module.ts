import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { LoadMoreComponent } from './components/load-more/load-more.component';
import { ColorBorderDirective } from '../shared/directives/color-border.directive';
import { NoDataComponent } from './components/no-data/no-data.component';
import { CourseDurationPipe } from '../shared/pipes/course-duration/course-duration.pipe';
import { SearchCoursePipe } from '../shared/pipes/search-course/search-course.pipe';
import { DeleteCourseModalComponent } from './components/delete-course-modal/delete-course-modal.component';
import { CoursesTemplateComponent } from './components/courses-template/courses-template.component';
import { AuthInterceptor } from '../core/interceptors/auth-interceptor';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    CoursesListComponent,
    CourseItemComponent,
    LoadMoreComponent,
    ColorBorderDirective,
    NoDataComponent,
    CourseDurationPipe,
    SearchCoursePipe,
    DeleteCourseModalComponent,
    CoursesTemplateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
  ],
  exports: [CoursesListComponent, SearchCoursePipe, CourseDurationPipe],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]
})
export class CoursesModule {
}
