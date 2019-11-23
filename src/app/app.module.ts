import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursesModule } from './courses/courses.module';
import { LoginPageModule } from './login-page/login-page.module';
import { MainPageComponent } from './main-page/main-page.component';
import { AddCoursePageModule } from './add-course-page/add-course-page.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    CoursesModule,
    LoginPageModule,
    AddCoursePageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
