import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddCourseComponent } from './components/add-course-template/add-course-template.component';
import { DurationInputComponent } from './components/duration-input/duration-input.component';
import { DateInputComponent } from './components/date-input/date-input.component';
import { TopRatedInputComponent } from './components/top-rated-input/top-rated-input.component';
import { CoreModule } from '../core/core.module';
import { CoursesModule } from '../courses/courses.module';



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
