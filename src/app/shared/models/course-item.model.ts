export class CourseItem {
  public id: string = '';
  public title: string = '';
  public creationDate: Date | string = '';
  public duration: string = '';
  public description: string = '';
  public topRated: boolean = false;

  constructor(data?: CourseItem) {
      if (data) {
        this.id = data.id;
        this.title = data.title;
        this.creationDate = data.creationDate;
        this.duration = data.duration;
        this.description = data.description;
        this.topRated = data.topRated;
      }
    }
}

