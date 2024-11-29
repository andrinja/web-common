import Image, {ImageProps} from './';
import type {Meta, StoryObj} from '@storybook/react';
import Box from '@mui/material/Box';
import React from 'react';

const image: Meta<ImageProps> = {
	component: Image,
	argTypes: {
		aspectRatio: {
			control: {
				type: 'inline-radio',
			},
			options: [0.5, 1, 1.5],
		},
		borderRadius: {
			control: {
				type: 'radio',
			},
			options: [0.5, 1, '50%'],
		},
		src: {
			control: false,
		},
	},
	args: {
		src: '/cover.jpg',
	},
	decorators: [Story => <Box width={100}><Story/></Box>],
};

export default image;

/*
 * Image to be used in Cards and Modals.
 * The size of the image should be adjusted as needed.
 */
export const Default: StoryObj<ImageProps> = {};

export const Circle: StoryObj<ImageProps> = {args: {borderRadius: '50%'}};

export const BrokenImage: StoryObj<ImageProps> = {args: {src: ''}};
