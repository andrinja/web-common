import Checkbox, {CheckboxProps} from '@mui/material/Checkbox';
import type {Meta, StoryObj} from '@storybook/react';

const checkbox: Meta<CheckboxProps & {label: string}> = {
	title: 'Components/Checkbox',
	component: Checkbox,
	argTypes: {
		color: {
			control: {
				type: 'inline-radio',
			},
			options: ['primary', 'secondary'],
		},
	},
	args: {
		checked: true,
		color: 'primary',
		label: 'Check me',
	},
};

export default checkbox;

export const Default: StoryObj<CheckboxProps & {label: string}> = {};

export const Disabled: StoryObj<CheckboxProps & {label: string}> = {
	args: {
		disabled: true,
	},
};
