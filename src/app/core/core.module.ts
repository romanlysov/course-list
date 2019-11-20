import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ControlsComponent } from './controls/controls.component';
import { AddCourseButtonComponent } from './controls/add-course-button/add-course-button.component';
import { LogoComponent } from './logo/logo.component';
import { AuthComponent } from './auth/auth.component';
import { ControlsPresentationalComponent } from './controls/controls-presentational/controls-presentational.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

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
  ]
})
export class CoreModule { }
