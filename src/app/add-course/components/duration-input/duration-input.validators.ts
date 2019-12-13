import { AbstractControl } from '@angular/forms';

export const durationValidator = (control: AbstractControl) => {
  if (typeof control.value !== 'number') {
    return {durationError: {value: control.value}};
  }
  return null;
};
