import type {Meta, StoryObj} from '@storybook/react';
import Spinner, {SpinnerProps} from './';
import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';

const spinner: Meta<SpinnerProps> = {
	component: Spinner,
	argTypes: {
		CircularProgressProps: {
			table: {
				disable: true,
			},
		},
		placement: {
			control: false,
		},
		show: {
			control: {
				type: 'boolean',
			},
		},
	},
	args: {
		show: true,
	},
	parameters: {
		docs: {
			story: {
				iframeHeight: 300,
				inline: false,
			},
		},
	},
};

export default spinner;

export const Center: StoryObj<SpinnerProps> = {
	render: args => <Box><Spinner placement="center" {...args}/></Box>,
};

export const Bottom: StoryObj<SpinnerProps> = {
	args: {
		placement: 'bottom',
	},
	render: args => (
		<Box height={1}>
			<Typography>The Spinner will show after the content.</Typography>
			<Spinner {...args}/>
		</Box>
	),
};
