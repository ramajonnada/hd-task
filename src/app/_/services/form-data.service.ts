import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  constructor() {}

  private formData: { step: string; stepFromData: any }[] = [];

  setFormData(data: { step: string; stepFromData: any }) {
    const isExistingStepIndex = this.formData.findIndex((e) => {
      return e.step === data.step;
    });
    if (isExistingStepIndex > -1) this.formData.splice(isExistingStepIndex, 1);

    this.formData.push({ ...data });
  }

  getFormData() {
    return this.formData;
  }
}
