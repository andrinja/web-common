import type {Meta, StoryObj} from '@storybook/react';
import Textarea, {TextareaProps} from './';
import {fn} from '@storybook/test';

const textarea: Meta<TextareaProps> = {
	component: Textarea,
	argTypes: {
		fontWeight: {
			control: {
				type: 'radio',
			},
			options: ['fontWeightBold', 'fontWeightRegular'],
		},
		maxLength: {
			control: {
				type: 'number',
			},
		},
		onChange: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		fontWeight: 'fontWeightRegular',
		maxLength: 0,
		onChange: fn(() => null),
	},
};

export default textarea;

export const Default: StoryObj<TextareaProps> = {
	args: {
		value: 'This is a default multiline input.',
	},
};

export const WithMaxCharacters: StoryObj<TextareaProps> = {
	args: {
		maxLength: 250,
		value: 'This is a value of 30 characters or more. This will show the length of the value and the max characters you are allowed to enter.',
	},
};

export const Bold: StoryObj<TextareaProps> = {
	args: {
		fontWeight: 'fontWeightBold',
		placeholder: 'Name your moodagent',
		value: 'This is a default multiline input.',
	},
};

export const WithMaxValue: StoryObj<TextareaProps> = {
	args: {
		maxLength: 250,
		value: 'This is a default multiline input.',
	},
};
