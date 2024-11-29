import type {Meta, StoryObj} from '@storybook/react';
import Tooltip, {TooltipProps} from './';
import Box from '@mui/material/Box';
import React from 'react';

const tooltip: Meta<TooltipProps> = {
	component: Tooltip,
	argTypes: {
		closeOnClick: {
			control: {
				type: 'boolean',
			},
		},
		title: {
			control: {
				type: 'text',
			},
		},
	},
	args: {
		closeOnClick: false,
		title: 'This is a tooltip title',
	},
	decorators: [Story => <Box width={100}><Story/></Box>],
};

export default tooltip;

export const Default: StoryObj<TooltipProps> = {
	render: args => <Tooltip {...args}><Box>Hover me</Box></Tooltip>,
};
