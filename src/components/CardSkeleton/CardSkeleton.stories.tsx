import CardSkeleton, {CardSkeletonProps} from './';
import type {Meta, StoryObj} from '@storybook/react';
import Box from '@mui/material/Box';
import React from 'react';

const cardSkeleton: Meta<CardSkeletonProps> = {
	component: CardSkeleton,
	argTypes: {
		variant: {
			control: {
				type: 'radio',
			},
			options: ['circular', 'square'],
		},
	},
	decorators: [Story => <Box width={200}><Story/></Box>],
};

export default cardSkeleton;

export const Default: StoryObj<CardSkeletonProps> = {};

export const Circle: StoryObj<CardSkeletonProps> = {args: {variant: 'circular'}};
