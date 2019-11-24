import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { CourseItem } from '../../../shared/models/course-item.model';
import { SearchCoursePipe } from '../../../shared/pipes/search-course/search-course.pipe';
import { CoursesService } from '../../../core/services/courses/courses.service';
import { AuthorizationService } from '../../../core/services/authorization/authorization.service';

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

  constructor(private coursesService: CoursesService, private authService: AuthorizationService) {}

  ngOnInit() {
    this.getCourses();
    this.isAuthorized = this.authService.isAuthenticated();
  }

  ngOnChanges(changes) {
    if (changes.searchValue && this.searchedCourses) {
      if (this.searchValue.length === 0) {
        this.getCourses();
        return;
      }
      this.coursesService.getSearchedCourses(this.searchValue).subscribe(res => {
        this.searchedCourses = this.coursesService.formatCoursesResponse(res);
      });
    }

  }

  private filterNull(list) {
    if (Array.isArray(list)) {
      return list.filter(elem => elem);
    }
    return list;
  }

  private getCourses() {
    this.coursesService.getPartOfCourses(0).subscribe((res: CourseItem[]) => {
      this.searchedCourses = this.coursesService.formatCoursesResponse(this.filterNull(res));
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
      const deletedItem = this.searchedCourses.find(elem => elem.id === this.deletedCourseId);
      const deletedItemIndex = this.searchedCourses.indexOf(deletedItem);
      this.coursesService.deleteCourse(this.deletedCourseId).subscribe(
        this.searchedCourses.splice(deletedItemIndex, 1)
      );
    }
    this.setModalState(false);
  }

  public loadMoreHandler() {
    if (!this.searchedCourses || this.searchedCourses.length === 0) {
      this.getCourses();
      return;
    }
    const startLoadFrom = this.searchedCourses.pop();
    this.coursesService.getPartOfCourses(startLoadFrom.id).subscribe(res => {
      this.searchedCourses.push(...this.coursesService.formatCoursesResponse(this.filterNull(res)));
    });
  }
}
