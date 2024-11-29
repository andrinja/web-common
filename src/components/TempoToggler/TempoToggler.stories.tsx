import type {Meta, StoryObj} from '@storybook/react';
import TempoToggler, {TempoTogglerProps} from './';
import Box from '@mui/material/Box';
import React from 'react';
import {fn} from '@storybook/test';

const slider: Meta<TempoTogglerProps> = {
	component: TempoToggler,
	argTypes: {
		defaultTempo: {
			control: false,
		},
	},
	args: {
		onChange: fn(),
	},
	decorators: [Story => <Box width={350}><Story/></Box>],
};

export default slider;

export const Default: StoryObj<TempoTogglerProps> = {};
