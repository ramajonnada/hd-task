import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StepMetaData } from '../_/interfaces/step-metadata.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatStepperModule],
  templateUrl: './step.component.html',
  styleUrl: './step.component.scss'
})
export class StepComponent {
  @Input('step') step!: StepMetaData;


  constructor() {

  }

  ngOnChanges() {
    if (!this.step) return;
    this.buildFormGroups();
  }

  buildFormGroups(): void {
    this.step.formFields.forEach((field) => {
      this.step.stepFormGroup.addControl(
        field.controlName, new FormControl(field.value, field.validators)
      )
    });
    console.log(this.step.stepNumber, this.step.formFields, this.step.stepFormGroup.controls)
  }

  // $$back() {
  //   // decrement the step
  // }

  // $$next() {
  //   if (!this.step.stepFormGroup.valid) return;
  //   this.step.stepFormGroup.valid
  //     // increment the step and changeth value of the step valid or not
  // }

  $$submit() {
    // submit the form weather all steps of form is valid
    // or ahow the error message
  }
}
