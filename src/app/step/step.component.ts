import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormStepMetaData } from '../_/interfaces/step-metadata.interface';
import { MatStepperModule } from '@angular/material/stepper';
import { FormType } from '../_/enums/form-type.enum';
import { MatButtonModule } from '@angular/material/button';

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
  styleUrl: './step.component.scss'
})
export class StepComponent {
  @Input('step') step!: FormStepMetaData;

  constructor(private formBuilder: FormBuilder) { }


  ngOnChanges() {
    if (!this.step) return;
    this._buildFormGroups();
  }

  private _buildFormGroups(): void {
    if (this.step.formType === FormType.FormArray) this._createFormArray()
    else this._updateFormGroup();
  }

  $$getControls(control: string): any {
    const formGroup = this.step.formGroup.get(control) as FormArray;
    return formGroup ? formGroup : alert('error')
  }

  $$addFormGroup(controlName: string) {
    this._addForm(controlName);
  }

  $$removeFormGroup(controlName: string, index: number) {
    const formArray: FormArray = this.$$getControls(controlName);
    formArray.removeAt(index);
  }


  private _createFormArray() {
    if (!this.step.formArrayFields || !this.step.formArrayFields.length) return;
    this.step.formArrayFields.forEach((element) => {
      const formArray = this.formBuilder.array([]);
      this.step.formGroup.addControl(element.controlName, formArray)
      this._addForm(element.controlName);
    })
  }

  private _addForm(formArrayControlName: string) {
    const formGroup = this.formBuilder.group({}); // education fromgroup

    this.step.fields.forEach(field => {
      const formControl = new FormControl(field.value, field.validators)
      formGroup.addControl(field.fieldName, formControl)
    });

    const formArray = this.step.formGroup.get(formArrayControlName) as FormArray;
    if (formArray) formArray.push(formGroup);
  }


  private _updateFormGroup() {
    this.step.fields.forEach((field) => {
      this.step.formGroup.addControl(
        field.fieldName, new FormControl(field.value, field.validators)
      )
    });
  }

}
