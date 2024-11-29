import Input, {InputProps} from './';
import type {Meta, StoryObj} from '@storybook/react';
import Icon from 'components/Icon';
import IconButton from '@mui/material/IconButton';
import {InputAdornment} from '@mui/material';
import React from 'react';

const input: Meta<InputProps> = {
	component: Input,
	argTypes: {
		color: {
			control: {
				type: 'radio',
			},
			options: ['primary', 'secondary', 'warning'],
		},
		id: {
			table: {
				disable: true,
			},
		},
		placeholder: {
			control: {
				type: 'text',
			},
		},
	},
	args: {
		color: 'secondary',
		disabled: false,
		label: 'Label',
		placeholder: 'Placeholder',
	},
};

export default input;

export const Default: StoryObj<InputProps> = {};

export const Disabled: StoryObj<InputProps> = {args: {disabled: true, label: 'Input'}};

export const Error: StoryObj<InputProps> = {
	args: {
		error: true,
		helperText: 'this is error',
		label: 'Input',
	},
};

export const Readonly: StoryObj<InputProps> = {args: {disabled: true, label: 'Input'}};

export const WithIcon: StoryObj<InputProps> = {
	args: {
		InputProps: {
			endAdornment: (
				<InputAdornment position="end">
					<IconButton edge="end">
						<Icon name="MicExternal"/>
					</IconButton>
				</InputAdornment>
			),
		},
		label: 'Input',
	},
};

export const DisabledWithIcon: StoryObj<InputProps> = {
	args: {
		InputProps: {
			endAdornment: (
				<InputAdornment position="end">
					<IconButton disabled edge="end">
						<Icon name="MicExternal"/>
					</IconButton>
				</InputAdornment>
			),
		},
		disabled: true,
		label: 'Input',
	},
};

export const HelperText: StoryObj<InputProps> = {
	args: {
		helperText: 'This is a helper text',
		label: 'Input',
		value: 'This this the value',
	},
};