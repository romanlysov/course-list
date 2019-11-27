import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ControlsComponent } from './components/controls/controls.component';
import { AddCourseButtonComponent } from './components/controls/add-course-button/add-course-button.component';
import { LogoComponent } from './components/logo/logo.component';
import { AuthComponent } from './components/auth/auth.component';
import { ControlsPresentationalComponent } from './components/controls/controls-presentational/controls-presentational.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/components/not-found-template/not-found-template.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    ControlsComponent,
    AddCourseButtonComponent,
    LogoComponent,
    AuthComponent,
    ControlsPresentationalComponent,
    NotFoundComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    ControlsComponent,
    LoaderComponent,
  ]
})
export class CoreModule { }
