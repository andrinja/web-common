import type {Meta, StoryObj} from '@storybook/react';
import Box from '@mui/material/Box';
import React from 'react';
import SearchInit from './';

const searchInit: Meta = {
	title: 'Templates/SearchInit',
	component: SearchInit,
	decorators: [Story => <Box border={1} height={500}><Story/></Box>],
	parameters: {
		docs: {
			story: {
				iframeHeight: 500,
				inline: false,
			},
		},
	},
};

export default searchInit;

export const Default: StoryObj = {};
