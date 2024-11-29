import {CardCarousel, CardCarouselItem} from 'components/CardCarousel';
import type {Meta, StoryObj} from '@storybook/react';
import SlimCard, {SlimCardProps} from './';
import Box from '@mui/material/Box';
import React from 'react';
import {fn} from '@storybook/test';

const slimCard: Meta<SlimCardProps> = {
	component: SlimCard,
	argTypes: {
		isCurrentContext: {
			control: {
				type: 'boolean',
			},
		},
		isFetching: {
			control: {
				type: 'boolean',
			},
		},
		isPlaying: {
			control: {
				type: 'boolean',
			},
		},
		isTrackLoading: {
			control: {
				type: 'boolean',
			},
		},
		onClick: {
			control: false,
		},
	},
	args: {
		isCurrentContext: false,
		isFetching: false,
		isPlaying: false,
		isTrackLoading: false,
		onClick: fn(),
		title: '80s Synth Funk',
	},
};

export default slimCard;

export const Default: StoryObj<SlimCardProps> = {
	decorators: [Story => <Box width={200}><Story/></Box>],
};

export const SlimCardCarousel: StoryObj<SlimCardProps> = {
	decorators: [Story => <Box position="relative" py={8}><Story/></Box>],
	render: args => {
		return (
			<CardCarousel>
				{
					Array.from(Array(13).keys()).map(item => (
						<CardCarouselItem key={item}>
							<SlimCard {...args}/>
						</CardCarouselItem>
					))
				}
			</CardCarousel>
		);
	},
};
