import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './components/add-course-template/add-course-template.component';
import { CoreModule } from '../core/core.module';
import { DateInputComponent } from './components/date-input/date-input.component';
import { DurationInputComponent } from './components/duration-input/duration-input.component';
import { FormsModule } from '@angular/forms';
import { CoursesModule } from '../courses/courses.module';
import { TopRatedInputComponent } from './components/top-rated-input/top-rated-input.component';



@NgModule({
  declarations: [AddCourseComponent, DateInputComponent, DurationInputComponent, TopRatedInputComponent],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    CoursesModule,
  ]
})
export class AddCourseModule { }
