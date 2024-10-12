import { FormGroup } from "@angular/forms";
import { FormField } from "./form-field.interface";


export interface StepMetaData {
	stepNumber: number,
	stepName: string,
	formFields: FormField[],
	stepFormGroup: FormGroup,
	// isFormValid: boolean,
	isInitialStep: boolean,
	isFinalStep: boolean
}


