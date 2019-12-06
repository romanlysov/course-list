import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire//database';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursesModule } from './courses/courses.module';
import { LoginModule } from './login/login.module';
import { AddCourseModule } from './add-course/add-course.module';
import { CoursesGuard } from './core/guards/courses.guard';
import { environment } from '../environments/environment';
import { authReducer } from './login/reducers/authorization.reducers';
import { AuthEffects } from './login/effects/authorization.effects';
import { coursesReducer } from './courses/reducers/courses.reducer';
import { CoursesEffects } from './courses/effects/courses.effects';
import { loaderReducer } from './core/loader/loader.reducers';
import { addCourseReducer } from './add-course/reducers/ad-course.reducers';
import { AddCourseEffects } from './add-course/effects/add-course.effects';

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
    StoreModule.forRoot({
      auth: authReducer,
      courses: coursesReducer,
      loader: loaderReducer,
      addCourse: addCourseReducer
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AuthEffects, CoursesEffects, AddCourseEffects]),
  ],
  providers: [CoursesGuard],
  bootstrap: [AppComponent],
})
export class AppModule {
}
