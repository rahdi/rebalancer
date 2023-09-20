import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-labeled-input',
  templateUrl: './labeled-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LabeledInputComponent),
      multi: true,
    },
  ],
})
export class LabeledInputComponent implements OnInit, ControlValueAccessor {
  @Input() id!: string;
  @Input() label = '';
  @Input() type: HTMLInputElement['type'] = 'text';
  @Input() errorMessage?: string;

  control!: FormControl;
  onTouched() {}
  onChange() {}

  ngOnInit(): void {
    this.control = new FormControl('');
  }

  writeValue(value: never): void {
    this.control.setValue(value);
  }

  registerOnChange(handleChange: VoidFunction): void {
    this.onChange = handleChange;
    this.control.valueChanges.subscribe(handleChange);
  }

  registerOnTouched(handleTouched: VoidFunction): void {
    this.onTouched = handleTouched;
  }
}
