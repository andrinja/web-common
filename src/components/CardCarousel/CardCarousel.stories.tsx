import CardCarousel, {CardCarouselItem, CardCarouselProps} from './';
import type {Meta, StoryObj} from '@storybook/react';
import Box from '@mui/material/Box';
import Card from 'components/Card';
import Carousel, {CarouselProps} from '../Carousel';
import React, {useState} from 'react';
import {SwiperClass} from 'swiper/swiper-react';
import {fn} from '@storybook/test';
import {useTheme} from '@mui/material/styles';

const card: Meta<CardCarouselProps> = {
	component: CardCarousel,
	argTypes: {
		backTitle: {
			control: {
				type: 'text',
			},
		},
		children: {
			control: false,
		},
		nextTitle: {
			control: {
				type: 'text',
			},
		},
		presentStyle: {
			control: {
				type: 'radio',
			},
			options: ['standardcard', 'articlecard', 'tallcard'],
		},
		settings: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		backTitle: 'Back',
		beforeChange: fn(),
		nextTitle: 'Next',
	},
	decorators: [Story => <Box position="relative" py={8}><Story/></Box>],
};

export default card;

export const Default: StoryObj<CardCarouselProps> = {
	render: args => {
		return (
			<CardCarousel {...args}>
				{
					Array.from(Array(13).keys()).map(item => (
						<CardCarouselItem key={item}>
							<Card imageProps={{alt: 'alt text', src: '/cover.jpg'}} primary="Card text"/>
						</CardCarouselItem>
					))
				}
			</CardCarousel>
		);
	},
};

export const FetchMore: StoryObj<CarouselProps> = {
	render: args => {
		const theme = useTheme();
		const [items, setItems] = useState(Array.from(Array(16).keys()));

		function addItems(swiper: SwiperClass) {
			setItems(oldItems => {
				return Array.from(Array(oldItems.length + theme.options.carousel.maxSlidesPerView).keys());
			});
			swiper.update();
		}

		return (
			<Carousel
				{...args}
				onRealIndexChange={(swiper: SwiperClass) => {
					if (swiper.realIndex + 2 * theme.options.carousel.maxSlidesPerView > items.length) {
						addItems(swiper);
					}
				}}
			>
				{
					items.map(value => (
						<CardCarouselItem key={value}>
							<Card imageProps={{alt: 'alt text', src: '/cover.jpg'}} primary={value.toString()}/>
						</CardCarouselItem>
					))
				}
			</Carousel>
		);
	},
};
