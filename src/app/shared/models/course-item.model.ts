export class CourseItem {
  constructor(data: CourseItem) {
      this.id = data.id;
      this.title = data.title;
      this.creationDate = data.creationDate;
      this.duration = data.duration;
      this.description = data.description;
      this.topRated = data.topRated;
    }
  public id: string;
  public title: string;
  public creationDate: Date | string;
  public duration: string;
  public description: string;
  public topRated: boolean;
}

