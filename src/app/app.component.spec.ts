import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BreadcrumbsComponent } from './core/breadcrumbs/breadcrumbs.component';
import { ControlsComponent } from './core/components/controls/controls.component';
import { CoursesListComponent } from './courses/components/courses-list/courses-list.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { LogoComponent } from './core/components/logo/logo.component';
import { AuthComponent } from './core/auth/auth.component';
import { ControlsPresentationalComponent } from './core/components/controls/controls-presentational/controls-presentational.component';
import { AddCourseButtonComponent } from './core/components/controls/add-course-button/add-course-button.component';
import { CourseItemComponent } from './courses/components/course-item/course-item.component';
import { LoadMoreComponent } from './courses/components/load-more/load-more.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
      ],
      declarations: [
        AppComponent,
        AuthComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        ControlsComponent,
        CoursesListComponent,
        FooterComponent,
        LogoComponent,
        ControlsPresentationalComponent,
        AddCourseButtonComponent,
        CourseItemComponent,
        LoadMoreComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'course-list'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('course-list');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.logo').textContent).toContain('video course');
  });
});
