import { Component } from '@angular/core';

@Component({
  selector: 'app-add-course-button',
  templateUrl: './add-course-button.component.html',
  styleUrls: ['./add-course-button.component.scss']
})
export class AddCourseButtonComponent {
  public buttonText: string = '+ Add course';

  constructor() { }
}
