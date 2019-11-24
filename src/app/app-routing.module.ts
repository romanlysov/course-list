import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/components/login-template/login-template.component';
import { AddCourseComponent } from './add-course/components/add-course-template/add-course-template.component';
import { NotFoundComponent } from './not-found/components/not-found-template/not-found-template.component';
import { CoursesGuard } from './core/guards/courses.guard';
import { CoursesTemplateComponent } from './courses/components/courses-template/courses-template.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'new', canActivate: [CoursesGuard], component: AddCourseComponent},
  {path: 'courses/:id', canActivate: [CoursesGuard], component: AddCourseComponent},
  {path: 'courses', canActivate: [CoursesGuard], component: CoursesTemplateComponent},
  {path: '',   redirectTo: '/courses', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
