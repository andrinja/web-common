import CodeInput, {CodeInputProps} from './';
import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import {fn} from '@storybook/test';
import {useState} from 'react';

const codeInput: Meta<CodeInputProps & {width: string}> = {
	component: CodeInput,
	argTypes: {
		FormHelperTextProps: {
			table: {
				disable: true,
			},
		},
		InputProps: {
			table: {
				disable: true,
			},
		},
		autoFocus: {
			table: {
				disable: true,
			},
		},
		helperText: {
			control: {
				type: 'text',
			},
		},
		inputCount: {
			control: {
				type: 'number',
			},
		},
		name: {
			table: {
				disable: true,
			},
		},
		onChange: {
			table: {
				disable: true,
			},
		},
		value: {
			control: {
				type: 'text',
			},
		},
		width: {
			control: {
				type: 'text',
			},
		},
	},
	args: {
		onChange: fn(),
		helperText: 'Please enter the 6-digit code',
		inputCount: 6,
		width: '320px',
	},
	parameters: {
		docs: {
			description: {
				component: 'The `CodeInput` component is built with the `Input` component. By default, the input type is `number`.',
			},
			source: {
				excludeDecorators: true,
			},
		},
	},
};

export default codeInput;

export const Default: StoryObj<CodeInputProps & {width: string}> = {
	args: {
		name: 'default',
	},
	render: ({width, ...args}) => <CodeInput {...args} sx={{width}}/>,
};

export const WithValue: StoryObj<CodeInputProps & {width: string}> = {
	args: {
		name: 'withValue',
		value: '123456',
	},
	render: ({width, ...args}) => <CodeInput {...args} sx={{width}}/>,
};

export const Error: StoryObj<CodeInputProps & {width: string}> = {
	args: {
		error: true,
		helperText: 'Please enter the 6-digit code',
		name: 'error',
	},
	render: ({width, ...args}) => <CodeInput {...args} sx={{width}}/>,
};

export const Controlled: StoryObj<CodeInputProps & {width: string}> = {
	render: ({width, ...args}) => {
		const [value, setValue] = useState('');

		const handleChange = fn((value: string) => {
			setValue(value);
		});

		return (
			<CodeInput
				{...args}
				onChange={value => handleChange(value)}
				sx={{width}}
				value={value}
			/>
		);
	},
};
