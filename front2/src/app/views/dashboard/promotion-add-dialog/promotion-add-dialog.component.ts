import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatDatepicker} from "@angular/material/datepicker";
import {
  AfterViewInit,
  forwardRef,
  Input,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
// @ts-ignore
import { default as _rollupMoment, Moment } from 'moment';

const moment = _rollupMoment || _moment;

export const YEAR_MODE_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-promotion-add-dialog',
  templateUrl: './promotion-add-dialog.component.html',
  styleUrls: ['./promotion-add-dialog.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: YEAR_MODE_FORMATS },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PromotionAddDialogComponent),
      multi: true,
    },
  ],
})



export class PromotionAddDialogComponent implements ControlValueAccessor,   OnInit{
  form!: FormGroup;
  selectedYear!: String

  /** Component label */
  label = 'Choisir une date';

  _max!: Moment;
  @Input()
  get max(): number | Date {
    // @ts-ignore
    return this._max ? this._max.year() : undefined;
  }
  set max(max: number | Date) {
    if (max) {
      const momentDate =
          typeof max === 'number' ? moment([max, 0, 1]) : moment(max);
      this._max = momentDate.isValid() ? momentDate : undefined;
    }
  }

  _min!: Moment;
  @Input()
  get min(): number | Date {
    // @ts-ignore
    return this._min ? this._min.year() : undefined;
  }
  set min(min: number | Date) {
    if (min) {
      const momentDate =
          typeof min === 'number' ? moment([min, 0, 1]) : moment(min);
      this._min = momentDate.isValid() ? momentDate : undefined;
    }
  }

  @Input() touchUi = false;

  @ViewChild(MatDatepicker) _picker!: MatDatepicker<Moment>;

  _inputCtrl: FormControl = new FormControl();

  // Function to call when the date changes.
  onChange = (year: Date) => { };

  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => { };

  /** send the focus away from the input so it doesn't open again */
  _takeFocusAway = (datepicker: MatDatepicker<Moment>) => { };


  writeValue(date: Date): void {
    if (date && this._isYearEnabled(date.getFullYear())) {
      const momentDate = moment(date);
      if (momentDate.isValid()) {
        momentDate.set({ date: 1 });
        this._inputCtrl.setValue(moment(date), { emitEvent: false });
      }
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    isDisabled
        ? (this._picker.disabled = true)
        : (this._picker.disabled = false);

    isDisabled ? this._inputCtrl.disable() : this._inputCtrl.enable();
  }

  _yearSelectedHandler(chosenDate: Moment, datepicker: MatDatepicker<Moment>) {
    datepicker.close();

    if (!this._isYearEnabled(chosenDate.year())) {
      return;
    }

    chosenDate.set({ date: 1 });

    this._inputCtrl.setValue(chosenDate, { emitEvent: false });
    this.onChange(chosenDate.toDate());
    this.onTouched();
  }

  _openDatepickerOnClick(datepicker: MatDatepicker<Moment>) {
    if (!datepicker.opened) {
      datepicker.open();
    }
  }

  /** Whether the given year is enabled. */
  private _isYearEnabled(year: number) {
    // disable if the year is greater than maxDate lower than minDate
    if (
        year === undefined ||
        year === null ||
        (this._max && year > this._max.year()) ||
        (this._min && year < this._min.year())
    ) {
      return false;
    }

    return true;
  }
  constructor(
      public dialogRef: MatDialogRef<PromotionAddDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: String,
      private formBuilder: FormBuilder,
  ) { }
  onCancelUserDialog(): void {
    //this.data = new Team(0,'', '', [] );
    this.dialogRef.close();
  }




  ngOnInit() {
    //this.form = this.formBuilder.group(new Team(0, '', '', []));
    /*this.dialogRef.afterOpened().subscribe(
        next => {
          this.form.controls['id'].disable();
        }
    )*/
  }

  submit() {
    try {
      this.selectedYear = this._inputCtrl.getRawValue().year();
    } catch (e) {
      this.selectedYear = '';
    }
    //console.log(this.selectedYear);
    this.dialogRef.close(this.selectedYear);
  }

}
