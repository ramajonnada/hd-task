import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormStepMetaData } from '../_/interfaces/step-metadata.interface';
import { MatStepperModule } from '@angular/material/stepper';
import { FormType } from '../_/enums/form-type.enum';
import { MatButtonModule } from '@angular/material/button';
import { FormField } from '../_/types/form-field.interface';
import { FormDataService } from '../_/services/form-data.service';

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
  ],
  templateUrl: './step.component.html',
  styleUrl: './step.component.scss',
})
export class StepComponent {
  @Input('step') step!: FormStepMetaData;
  @Output('finalSubmit') finalSubmit: EventEmitter<any> = new EventEmitter();
  @Output('next') next: EventEmitter<any> = new EventEmitter();
  @Output('previous') previous: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private formDataService: FormDataService
  ) {}

  ngOnChanges() {
    if (!this.step) return;
    this._loadFormData();
  }

  private _loadFormData() {
    const formData = localStorage.getItem(`step-${this.step.stepIndex}`);
    if (formData) {
      const parsedData = JSON.parse(formData);
      if (this.step.formType === FormType.FormGroup) {
        this.step.formGroup.reset();
        this._createFormGroup(parsedData);
      } else {
        console.log('parsedData', parsedData);
        this._createFormArray(parsedData);
      }
    } else {
      this._buildFormGroups();
    }
  }

  private _buildFormGroups(): void {
    if (this.step.formType === FormType.FormArray) this._createFormArray();
    else this._createFormGroup();
  }

  private _createFormArray(parsedData?: any) {
    // parsedData = { ed : []}
    if (!this.step.formArrayFields || !this.step.formArrayFields.length) return;
    this.step.formArrayFields.forEach((formArrayfield) => {
      const formArray = this.formBuilder.array([]);
      this.step.formGroup.addControl(formArrayfield.controlName, formArray);

      if (parsedData) {
        parsedData[formArrayfield.controlName].forEach((element: any) => {
          this._addForm(formArrayfield.controlName, element);
        });
      } else this._addForm(formArrayfield.controlName);
    });
  }

  private _addForm(formArrayControlName: string, parsedData?: any) {
    const formArray = this.step.formGroup.get(
      formArrayControlName
    ) as FormArray;
    const formGroup = this.formBuilder.group({});

    this.step.fields.forEach((field) => {
      let value = field.value;
      if (parsedData) value = parsedData[field.fieldName];
      const formControl = new FormControl(value, field.validators);
      formGroup.addControl(field.fieldName, formControl);
    });

    if (formArray) formArray.push(formGroup);
  }

  private _createFormGroup(parsedData?: any) {
    this.step.fields.forEach((field) => {
      let value = field.value;
      if (parsedData) value = parsedData[field.fieldName];
      this.step.formGroup.addControl(
        field.fieldName,
        new FormControl(value, field.validators)
      );
    });
  }

  $$getControls(control: string): any {
    const formGroup = this.step.formGroup.get(control) as FormArray;
    return formGroup ? formGroup : alert('error');
  }

  $$addFormGroup(controlName: string) {
    this._addForm(controlName);
  }

  $$removeFormGroup(controlName: string, index: number) {
    const formArray: FormArray = this.$$getControls(controlName);
    formArray.removeAt(index);
  }

  $$next() {
    if (this.step.formGroup.valid) {
      this._cacheFormData();
      this.next.emit();
    } else {
      alert('Please fill in all required fields.');
    }
  }

  $$previous() {
    this.previous.emit();
  }

  private _cacheFormData() {
    localStorage.setItem(
      `step-${this.step.stepIndex}`,
      JSON.stringify(this.step.formGroup.value)
    );
    this.formDataService.setFormData({
      step: 1,
      stepFromData: this.step.formGroup.value,
    });
    // alert('Form data saved to Local Storage!');
  }

  $$submit() {
    this.finalSubmit.emit();
  }

  $$isInput(field: FormField) {
    return (
      field.fieldType === 'text' ||
      field.fieldType === 'email' ||
      field.fieldType === 'date' ||
      field.fieldType === 'number' ||
      field.fieldType === 'tel'
    );
  }
}
