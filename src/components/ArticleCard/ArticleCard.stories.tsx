import ArticleCard, {ArticleCardProps} from '.';
import {CardCarousel, CardCarouselItem} from '../CardCarousel';
import type {Meta, StoryObj} from '@storybook/react';
import Box from '@mui/material/Box';
import React from 'react';
import {fn} from '@storybook/test';

const articleCard: Meta<ArticleCardProps> = {
	component: ArticleCard,
	argTypes: {
		imgSrc: {
			control: false,
		},
		onClick: {
			control: false,
		},
		isExclusive: {
			control: 'boolean',
		},
	},
	args: {
		imgSrc: '/articleCover.jpg',
		isExclusive: false,
		onClick: fn(),
		subtitle: 'Curated by Jada',
		title: 'In a soulful mood…',
	},
};

export default articleCard;

export const Default: StoryObj<ArticleCardProps> = {
	decorators: [Story => <Box width={376}><Story/></Box>],
};

export const ArticleCardCarousel: StoryObj<ArticleCardProps> = {
	decorators: [Story => <Box position="relative" py={8}><Story/></Box>],
	render: args => {
		return (
			<CardCarousel presentStyle="articlecard">
				{
					Array.from(Array(13).keys()).map(item => (
						<CardCarouselItem key={item}>
							<ArticleCard {...args}/>
						</CardCarouselItem>
					))
				}
			</CardCarousel>
		);
	},
};
