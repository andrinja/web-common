import type {Meta, StoryObj} from '@storybook/react';
import React, {useState} from 'react';
import SearchInput, {SearchInputProps} from './';
import {fn} from '@storybook/test';

const searchInput: Meta<SearchInputProps> = {
	component: SearchInput,
	args: {
		onClearClick: fn(),
	},
};

export default searchInput;

export const Default: StoryObj<SearchInputProps> = {
	render: args => {
		const [value, setValue] = useState('');

		return (
			<SearchInput {...args} onChange={event => setValue(event.target.value)} value={value}/>
		);
	},
};
