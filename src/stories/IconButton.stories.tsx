import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import type {Meta, StoryObj} from '@storybook/react';
import Icon from 'components/Icon';
import React from 'react';

const iconButton: Meta<IconButtonProps> = {
	title: 'Components/IconButton',
	component: IconButton,
	argTypes: {
		color: {
			control: {
				type: 'radio',
			},
			options: ['primary', 'secondary', 'warning'],
		},
		size: {
			control: {
				type: 'radio',
			},
			options: ['medium', 'large'],
		},
	},
};

export default iconButton;

export const Default: StoryObj<IconButtonProps> = {
	render: args => (
		<IconButton aria-label="Aria label" {...args}>
			<Icon name="VisibilityOff"/>
		</IconButton>
	),
};

export const Disabled: StoryObj<IconButtonProps> = {
	render: () => <IconButton disabled><Icon name="VisibilityOff"/></IconButton>,
};
