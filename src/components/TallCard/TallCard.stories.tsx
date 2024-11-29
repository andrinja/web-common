import {CardCarousel, CardCarouselItem} from '../CardCarousel';
import type {Meta, StoryObj} from '@storybook/react';
import TallCard, {TallCardProps} from './';
import Box from '@mui/material/Box';
import React from 'react';
import {fn} from '@storybook/test';

const tallCard: Meta<TallCardProps> = {
	component: TallCard,
	argTypes: {
		imgSrc: {
			control: false,
		},
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
		imgSrc: '/radioCover.jpg',
		imgTitle: 'image title',
		isCurrentContext: false,
		mode: {
			color: 'angry',
			icon: 'spa',
			name: 'Calm',
		},
		isFetching: false,
		isPlaying: false,
		isTrackLoading: false,
		onClick: fn(),
		title: 'Joel Adams, ABBA, Charli XCX, Joel Adams, Breakbot, Joel Adams, ABBA, Joel Adams',
	},
};

export default tallCard;

export const Default: StoryObj<TallCardProps> = {
	decorators: [Story => <Box width={200}><Story/></Box>],
};

export const TallCardCarousel:
StoryObj<TallCardProps> = {
	decorators: [Story => <Box position="relative" py={8}><Story/></Box>],
	render: args => {
		return (
			<CardCarousel presentStyle="tallcard">
				{
					Array.from(Array(13).keys()).map(item => (
						<CardCarouselItem key={item}>
							<TallCard {...args}/>
						</CardCarouselItem>
					))
				}
			</CardCarousel>
		);
	},
};
