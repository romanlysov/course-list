import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course/add-course.component';
import { CoreModule } from '../core/core.module';
import { DateInputComponent } from './date-input/date-input.component';
import { DurationInputComponent } from './duration-input/duration-input.component';
import { FormsModule } from '@angular/forms';
import { CoursesModule } from '../courses/courses.module';



@NgModule({
  declarations: [AddCourseComponent, DateInputComponent, DurationInputComponent],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    CoursesModule,
  ]
})
export class AddCoursePageModule { }
