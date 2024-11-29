import type {Meta, StoryObj} from '@storybook/react';
import SkeletonTemplate, {SkeletonTemplateProps} from './';
import Box from '@mui/material/Box';
import Image from 'components/Image';
import React from 'react';

const skeletonTemplate: Meta<SkeletonTemplateProps> = {
	component: SkeletonTemplate,
	argTypes: {
		message: {
			control: {
				type: 'text',
			},
		},
		nodeCount: {
			control: {
				type: 'number',
			},
		},
		skeletonType: {
			control: {
				type: 'radio',
			},
			options: ['list', 'square', 'circle'],
		},
	},
	args: {
		message: 'This message is supposed to tell you something.',
		nodeCount: 8,
		skeletonType: 'list',
	},
};

export default skeletonTemplate;

export const Default: StoryObj<SkeletonTemplateProps> = {
	render: args => (
		<Box height={500}>
			<SkeletonTemplate {...args}/>
		</Box>
	),
};

export const WithCardSkeletonGrid: StoryObj<SkeletonTemplateProps> = {
	args: {
		skeletonType: 'circle',
	},
	render: args => (
		<Box height={500}>
			<SkeletonTemplate {...args}/>
		</Box>
	),
};

export const WithContentBefore: StoryObj<SkeletonTemplateProps> = {
	args: {
		skeletonType: 'list',
	},
	render: args => (
		<>
			<Box mb={2} width={250}>
				<Image src="/cover.jpg"/>
			</Box>
			<Box height={500}>
				<SkeletonTemplate {...args}/>
			</Box>
		</>
	),
};
