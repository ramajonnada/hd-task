import { FormGroup } from "@angular/forms";
import { FormField } from "../types/form-field.interface";
import { FormType } from "../enums/form-type.enum";
import { FormArrayField } from "./form-array-field.interface";


export interface FormStepMetaData {
	stepIndex: number,
	stepTitle: string,
	fields: FormField[],
	formGroup: FormGroup,
	isInitialStep: boolean,
	isFinalStep: boolean,
	formType: FormType,
	formArrayFields?: FormArrayField[]
}



