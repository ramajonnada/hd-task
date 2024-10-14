import { FieldType } from "../enums/field-type.enum";

export interface FormField {
	fieldLabel: string,
	fieldName: string;
	fieldType: FieldType;
	value?: any;
	validators: any[];
	dropdownValues?: any[]
}