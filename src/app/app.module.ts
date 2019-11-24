import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire//database';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursesModule } from './courses/courses.module';
import { LoginModule } from './login/login.module';
import { AddCourseModule } from './add-course/add-course.module';
import { CoursesGuard } from './core/guards/courses.guard';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    CoursesModule,
    LoginModule,
    AddCourseModule,
    AngularFireModule.initializeApp(environment.firebase, 'courses-list'),
    AngularFireDatabaseModule,
  ],
  providers: [CoursesGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
