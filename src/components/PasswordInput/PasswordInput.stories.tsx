import type {Meta, StoryObj} from '@storybook/react';
import PasswordInput, {PasswordInputProps} from './';

const passwordInput: Meta<PasswordInputProps> = {
	component: PasswordInput,
	argTypes: {
		IconButtonProps: {
			table: {
				disable: true,
			},
		},
		InputProps: {
			table: {
				disable: true,
			},
		},
		label: {
			control: {
				type: 'text',
			},
		},
	},
	args: {
		label: 'Input',
	},
};

export default passwordInput;

export const Default: StoryObj<PasswordInputProps> = {
	args: {
		value: 'This this the value',
	},
};
