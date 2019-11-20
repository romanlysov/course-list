import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login-page/login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddCourseComponent } from './add-course-page/add-course/add-course.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { CoursesGuard } from './courses/courses.guard';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'new', canActivate: [CoursesGuard], component: AddCourseComponent},
  {path: 'courses/:id', canActivate: [CoursesGuard], component: AddCourseComponent},
  {path: 'courses', canActivate: [CoursesGuard], component: MainPageComponent},
  {path: '',   redirectTo: '/courses', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
