import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ControlsComponent } from './controls/controls.component';
import { SearchButtonComponent } from './search-button/search-button.component';
import { AddCourseButtonComponent } from './add-course-button/add-course-button.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    ControlsComponent,
    SearchButtonComponent,
    AddCourseButtonComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    ControlsComponent
  ]
})
export class CoreModule { }
