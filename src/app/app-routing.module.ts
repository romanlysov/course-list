import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login-page/login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddCourseComponent } from './add-course-page/add-course/add-course.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'add', component: AddCourseComponent},
  {path: '**', component: MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
