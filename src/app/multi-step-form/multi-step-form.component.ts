import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule, StepperOrientation } from '@angular/material/stepper';
import { StepComponent } from '../step/step.component';
import { StepMetaData } from '../_/interfaces/step-metadata.interface';
import { STEPS } from '../_/types/step-info';

@Component({
  selector: 'app-multi-step-form',
  standalone: true,
  imports: [
    MatStepperModule,
    CommonModule,
    MatButtonModule,
    StepComponent
  ],
  templateUrl: './multi-step-form.component.html',
  styleUrl: './multi-step-form.component.scss'
})
export class MultiStepFormComponent {
  // Need to do dynamicaly for all devices
  stepperOrientation: StepperOrientation = 'vertical';
  steps: StepMetaData[] = STEPS;
  
}
