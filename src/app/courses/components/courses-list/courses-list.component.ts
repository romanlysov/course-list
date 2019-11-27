import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { CourseItem } from '../../../shared/models/course-item.model';
import { SearchCoursePipe } from '../../../shared/pipes/search-course/search-course.pipe';
import { CoursesService } from '../../../core/services/courses/courses.service';
import { AuthorizationService } from '../../../core/services/authorization/authorization.service';
import { interval, Observable } from 'rxjs/index';
import { debounce } from 'rxjs/operators';
import { LoaderService } from '../../../core/loader.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [SearchCoursePipe]
})
export class CoursesListComponent implements OnInit, OnChanges {
  public showModal: boolean = false;
  public isAuthorized: boolean;
  private deletedCourseId: string;
  public searchedCourses;

  @Input() searchValue: string;

  constructor(
    private coursesService: CoursesService,
    private authService: AuthorizationService,
    private loaderService: LoaderService,
  ) {
  }

  ngOnInit() {
    this.getCourses();
    this.isAuthorized = this.authService.isAuthenticated();
  }

  ngOnChanges(changes) {
    if (changes.searchValue && this.searchedCourses) {

      const obs = new Observable(observer => {
        observer.next(this.searchValue);
      });

      obs
        .pipe(debounce(() => interval(1000)))
        .subscribe((value: string) => {
          if (value.length > 2) {
            this.coursesService.getSearchedCourses(value).subscribe(res => {
              this.searchedCourses = this.coursesService.formatCoursesResponse(res);
          });
        }
          if (value.length === 0) {
            console.log(value.length);
            this.coursesService.getPartOfCourses(0).subscribe(res => {
              this.searchedCourses = this.coursesService.formatCoursesResponse(this.filterNull(res));
          });
        }
      });
    }

  }

  private filterNull(list) {
    if (Array.isArray(list)) {
      return list.filter(elem => elem);
    }
    return list;
  }
  getCourses() {
    this.loaderService.setLoading(true);
    this.coursesService.getPartOfCourses(0).subscribe((res: CourseItem[]) => {
      this.searchedCourses = this.coursesService.formatCoursesResponse(this.filterNull(res));
      this.loaderService.setLoading(false);
    });
  }

  private setModalState(state) {
    this.showModal = state;
  }

  public deleteCourseHandler(id: string) {
    this.setModalState(true);
    this.deletedCourseId = id;
  }

  public modalHandler(state: boolean) {
    if (state) {
      this.loaderService.setLoading(true);
      const deletedItem = this.searchedCourses.find(elem => elem.id === this.deletedCourseId);
      const deletedItemIndex = this.searchedCourses.indexOf(deletedItem);

      this.coursesService.deleteCourse(this.deletedCourseId).subscribe(() => {
          this.searchedCourses.splice(deletedItemIndex, 1);
          this.loaderService.setLoading(false);
      });
    }
    this.setModalState(false);
  }

  loadMoreHandler() {
    this.loaderService.setLoading(true);
    if (!this.searchedCourses || this.searchedCourses.length === 0) {
      this.getCourses();
      this.loaderService.setLoading(false);
      return;
    }
    const startLoadFrom = this.searchedCourses.pop();
    this.coursesService.getPartOfCourses(startLoadFrom.id).subscribe(res => {
      this.searchedCourses.push(...this.coursesService.formatCoursesResponse(this.filterNull(res)));
      this.loaderService.setLoading(false);
    });
  }
}
