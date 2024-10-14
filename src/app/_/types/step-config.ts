import { FormGroup, Validators } from "@angular/forms";
import { FormStepMetaData } from "../interfaces/step-metadata.interface";
import { FieldType } from "../enums/field-type.enum";
import { FormType } from "../enums/form-type.enum";

export const STEPS_CONFIG: FormStepMetaData[] = [
	{
		stepIndex: 1,
		stepTitle: 'Personal',
		fields: [
			{
				fieldName: 'firstName',
				fieldLabel: 'First Name',
				fieldType: FieldType.Text,
				validators: [Validators.required]
			},
			{
				fieldName: 'lastName',
				fieldLabel: 'Last Name',
				fieldType: FieldType.Text,
				validators: [Validators.required]
			},
			{
				fieldName: 'dateOfBirth',
				fieldLabel: 'Date Of Birth',
				fieldType: FieldType.Date,
				validators: [Validators.required]
			},
			{
				fieldName: 'gender',
				fieldLabel: 'Gender',
				fieldType: FieldType.Dropdown,
				dropdownValues: [
					'Female',
					'Male',
					'Other'
				],
				validators: [Validators.required]
			},
		],
		formGroup: new FormGroup({}),
		isInitialStep: true,
		isFinalStep: false,
		formType: FormType.FormGroup
	},
	{
		stepIndex: 2,
		stepTitle: 'Contact',
		fields: [
			{
				fieldName: 'email',
				fieldLabel: 'Email',
				fieldType: FieldType.Email,
				validators: [Validators.required, Validators.email]
			},
			{
				fieldName: 'phone',
				fieldLabel: 'Phone',
				fieldType: FieldType.TelePhone,
				validators: [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]
			}
		],
		formGroup: new FormGroup({}),
		isInitialStep: false,
		isFinalStep: false,
		formType: FormType.FormGroup
	},
	{
		stepIndex: 3,
		stepTitle: 'Education',
		formArrayFields: [
			{ controlName: 'educationDetails' },
		],
		fields: [
			{
				fieldName: 'fieldOfStudy',
				fieldLabel: 'Field Of Study',
				fieldType: FieldType.Text,
				validators: [Validators.required]
			},
			{
				fieldName: 'schoolNameOrCollegeName',
				fieldLabel: 'Scholl Name / College Name',
				fieldType: FieldType.Text,
				validators: [Validators.required]
			},
			{
				fieldName: 'location',
				fieldLabel: 'Location',
				fieldType: FieldType.Text,
				validators: [Validators.required]
			},
			{
				fieldName: 'startDate',
				fieldLabel: 'Start Date',
				fieldType: FieldType.Date,
				validators: [Validators.required]
			},
			{
				fieldName: 'endDate',
				fieldLabel: 'End Date',
				fieldType: FieldType.Date,
				validators: [Validators.required]
			},
			{
				fieldName: 'grade',
				fieldLabel: 'Grade',
				fieldType: FieldType.Text,
				validators: [Validators.required]
			}
		],
		formGroup: new FormGroup({}),
		isInitialStep: false,
		isFinalStep: false,
		formType: FormType.FormArray
	},
	{
		stepIndex: 4,
		stepTitle: 'Skills',
		formArrayFields: [
			{ controlName: 'skills' },
		],
		fields: [
			{
				fieldName: 'skillName',
				fieldLabel: 'Skill Name',
				fieldType: FieldType.Text,
				validators: [Validators.required]
			},
			{
				fieldName: 'proficiencyLevel',
				fieldLabel: 'Proficiency Level',
				fieldType: FieldType.Dropdown,
				dropdownValues: [
					'Beginner',
					'Intermediate',
					'Advanced',
					'Expert'
				],
				validators: [Validators.required]
			}
		],
		formGroup: new FormGroup({}),
		isInitialStep: false,
		isFinalStep: false,
		formType: FormType.FormArray
	},
	{
		stepIndex: 5,
		stepTitle: 'Final',
		fields: [
			{
				fieldName: 'terms&Conditions',
				fieldLabel: 'Terms And Condtions',
				fieldType: FieldType.Checkbox,
				validators: [Validators.requiredTrue]
			}
		],
		formGroup: new FormGroup({}),
		isInitialStep: false,
		isFinalStep: true,
		formType: FormType.FormGroup
	},
]