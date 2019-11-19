import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login-page/login/login.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '**', component: MainPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
