import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { CourseItem } from '../course-item.model';
import { SearchCoursePipe } from './search-course.pipe';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  providers: [SearchCoursePipe]
})
export class CoursesPageComponent implements OnInit, OnChanges {
  private courseItems: CourseItem[];
  private showModal: boolean = false;
  private deletedCourseId: string;
  public searchedCourses: CourseItem[];

  @Input() searchValue: string;

  constructor(private search: SearchCoursePipe, private coursesService: CoursesService) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.getCourses();
    this.searchedCourses = this.courseItems;
  }

  ngOnChanges(changes) {
    if (changes.searchValue && this.courseItems) {
      this.searchedCourses = this.search.transform(this.searchValue, this.courseItems);
    }
    console.log('ngOnChanges');
  }

  getCourses() {
    this.courseItems = this.coursesService.getList();
  }

  private setModalState(state) {
    this.showModal = state;
  }

  deleteCourseHandler(id: string) {
    this.setModalState(true);
    this.deletedCourseId = id;
  }


  public modalHandler(state: boolean) {
    if (state) {
      this.coursesService.removeItem(this.deletedCourseId);
    }
    this.setModalState(false);
  }

  loadMoreHandler() {
    console.log('loaded more courses');
  }
}
