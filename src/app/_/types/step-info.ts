import { FormGroup, Validators } from "@angular/forms";
import { StepMetaData } from "../interfaces/step-metadata.interface";
import { ControlType } from "../interfaces/form-field.interface";


export const STEPS: StepMetaData[] = [
	{
		stepNumber: 1,
		stepName: 'Personal',
		formFields: [
			{ controlName: 'firstName', controlType: ControlType.Text, validators: [Validators.required] },
			{ controlName: 'lastName', controlType: ControlType.Text, validators: [Validators.required] },
			{ controlName: 'dateOfBirth', controlType: ControlType.Date, validators: [Validators.required] },
			{
				controlName: 'gender',
				controlType: ControlType.Dropdown,
				dropdownValues: [
					'Female',
					'Male',
					'Other'
				],
				validators: [Validators.required]
			},
		],
		stepFormGroup: new FormGroup({}),
		isInitialStep: true,
		isFinalStep: false
	},
	{
		stepNumber: 2,
		stepName: 'Contact',
		formFields: [
			{ controlName: 'firstName', controlType: ControlType.Text, value: '', validators: [Validators.required] },
		],
		stepFormGroup: new FormGroup({}),
		isInitialStep: false,
		isFinalStep: false
	},
	// {
	// 	stepNumber: 3,
	// 	stepName: 'Education',
	// 	stepFormGroup: new FormGroup({}),
	// 	isInitialStep: false,
	// 	isFinalStep: false
	// },
	// {
	// 	stepNumber: 4,
	// 	stepName: 'Skills',
	// 	stepFormGroup: new FormGroup({}),
	// 	isInitialStep: false,
	// 	isFinalStep: false
	// },
	// {
	// 	stepNumber: 5,
	// 	stepName: 'Final',
	// 	stepFormGroup: new FormGroup({}),
	// 	isInitialStep: false,
	// 	isFinalStep: true
	// },
]