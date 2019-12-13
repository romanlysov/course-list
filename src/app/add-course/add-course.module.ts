import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddCourseComponent } from './components/add-course-template/add-course-template.component';
import { DurationInputComponent } from './components/duration-input/duration-input.component';
import { DateInputComponent } from './components/date-input/date-input.component';
import { TopRatedInputComponent } from './components/top-rated-input/top-rated-input.component';
import { CoreModule } from '../core/core.module';
import { CoursesModule } from '../courses/courses.module';
import { AuthorsComponent } from './components/authors/authors.component';



@NgModule({
  declarations: [AddCourseComponent, DateInputComponent, DurationInputComponent, TopRatedInputComponent, AuthorsComponent],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    CoursesModule,
    ReactiveFormsModule,
  ]
})
export class AddCourseModule { }
