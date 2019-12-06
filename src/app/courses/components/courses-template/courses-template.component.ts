import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-template',
  templateUrl: './courses-template.component.html',
  styleUrls: ['./courses-template.component.scss']
})
export class CoursesTemplateComponent {

  constructor() {
  }

  public query: string;

  searchHandler(query) {
    this.query = query;
  }

}
