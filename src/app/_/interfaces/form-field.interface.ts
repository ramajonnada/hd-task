import { Validator } from "@angular/forms";

export enum ControlType {
	Text = 'text',
	Email = 'email',
	Number = 'number',
	Checkbox = 'checkbox',
	Date = 'date',
	Dropdown = 'dropdown'
}

export interface FormField {
	controlName: string;
	controlType: ControlType;
	value?: any;
	validators: any[];
	dropdownValues?: any[]
}
