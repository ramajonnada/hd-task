import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatStepper,
  MatStepperModule,
  StepperOrientation,
} from '@angular/material/stepper';
import { StepComponent } from '../step/step.component';
import { FormStepMetaData } from '../_/interfaces/step-metadata.interface';
import { STEPS_CONFIG } from '../_/types/step-config';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multi-step-form',
  standalone: true,
  imports: [MatStepperModule, CommonModule, MatButtonModule, StepComponent],
  templateUrl: './multi-step-form.component.html',
  styleUrl: './multi-step-form.component.scss',
})
export class MultiStepFormComponent {
  stepperOrientation: StepperOrientation = 'vertical';
  steps: FormStepMetaData[] = STEPS_CONFIG;
  errorMessage: string = '';

  constructor(private _router: Router) {}

  $$submit() {
    const inValidStep = this.steps.find((element) => element.formGroup.invalid);
    if (inValidStep) {
      return alert('Invalid Form');
    } else {
      this._router.navigateByUrl('/dash-board');
    }
  }

  $$next(stepper: MatStepper) {
    stepper.next();
  }

  $$previous(stepper: MatStepper) {
    stepper.previous();
  }
}
