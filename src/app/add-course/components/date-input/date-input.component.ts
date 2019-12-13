import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateInputComponent),
    multi: true,
  }]
})
export class DateInputComponent implements ControlValueAccessor {
  date;
  @Input() dateValidator;
  @Output() dateValueEmitter = new EventEmitter();
  private onChange = (value) => {};
  private onTouched = () => {};

  constructor() { }

  dateEmitter(value) {
    this.dateValueEmitter.emit(value);
  }

  writeValue(value) {
    this.date = value;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  updateValue(value) {
    this.date = value;
    this.onChange(value);
    this.onTouched();
  }
}
