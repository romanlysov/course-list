import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { Directive, Input } from '@angular/core';

export const dateValidator = (control: AbstractControl) => {
  const regexp = new RegExp('^\\d{1,2}\\/\\d{1,2}\\/\\d{4}$');
  if (!regexp.test(control.value)) {
    return {dateError: {value: control.value}};
  }
  return null;
};

@Directive({
  selector: '[appDateValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: dateValidator,
    multi: true,
  }]
})
export class ForTemplateDrivenDateValidator implements Validator {
  @Input('appDateValidator')

  validate = dateValidator;
}
