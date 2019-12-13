import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DurationInputComponent),
    multi: true,
  }]
})
export class DurationInputComponent implements ControlValueAccessor{
  duration: string;
  private onChange = (value) => {};
  private onTouched = () => {};
  @Output() durationValue = new EventEmitter();
  constructor() { }

  durationEmitter(value) {
    this.durationValue.emit(value);
  }
  writeValue(value) {
    this.duration = value;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  updateValue(value) {
    this.duration = value;
    this.onChange(value);
    this.onTouched();
  }

}
