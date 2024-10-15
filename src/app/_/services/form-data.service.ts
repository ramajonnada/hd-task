import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  constructor() {}

  private formData: { step: number; stepFromData: FormGroup } = {
    step: 0,
    stepFromData: new FormGroup({}),
  };

  setFormData(data: { step: number; stepFromData: FormGroup }) {
    this.formData = { ...data };
  }

  // Retrieve the stored form data
  getFormData() {
    return this.formData;
  }
}
