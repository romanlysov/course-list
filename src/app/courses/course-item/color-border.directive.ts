import {Directive, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appColorBorder]'
})
export class ColorBorderDirective implements OnInit {
  @Input('appColorBorder') courseDate: string;
  constructor() {
  }
  @HostBinding('style.border-color') border: string;
  ngOnInit() {
    const courseDateFormatted = new Date(this.courseDate);
    this.setBorderColor(this.changeBorderColor(courseDateFormatted));
  }
  private changeBorderColor(date: Date) {
    const currentDate = new Date();
    if (date < currentDate && date >= new Date(currentDate.setDate(currentDate.getDate() - 14))) {
      return 'green';
    }
    if (date > currentDate) {
      return 'blue';
    }
    return 'transparent';
  }

  private setBorderColor(color) {
    this.border = color;
  }

}
