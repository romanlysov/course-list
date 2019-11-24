import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseDuration'
})
export class CourseDurationPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '0 min';
    }
    const numberValue = parseInt(value, 10);
    return numberValue > 60 ? `${Math.floor(numberValue / 60)} h ${numberValue % 60} min` : `${numberValue} min`;
  }

}
