import Card, {CardActionsProps} from './';
import CardCarousel, {CardCarouselItem} from '../CardCarousel';
import CardRow, {CardRowItem} from 'components/CardRow';
import type {Meta, StoryObj} from '@storybook/react';
import Box from '@mui/material/Box';
import CardActions from './CardActions';
import FallbackImage from 'components/FallbackImage';
import Icon from 'components/Icon';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import {fn} from '@storybook/test';

function CardActionsMock({count, ...rest}: {count: number} & CardActionsProps) {
	const icons = ['Favorite', 'MoreHoriz'] as const;
	return (
		<CardActions {...rest}>
			{icons.slice(0, count).map((icon, i) => (
				<IconButton key={i}>
					<Icon name={icon}/>
				</IconButton>
			))}
		</CardActions>
	);
}

const card: Meta<typeof Card> = {
	component: Card,
	argTypes: {
		actions: {
			control: 'radio',
			options: ['none', 'one', 'two', 'one centered', 'two centered'],
			mapping: {
				none: <></>,
				one: <CardActionsMock count={1}/>,
				two: <CardActionsMock count={2}/>,
				'one centered': <CardActionsMock alignment="center" count={1}/>,
				'two centered': <CardActionsMock alignment="center" count={2}/>,
			},
		},
		imageProps: {
			table: {
				disable: true,
			},
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
		linkTo: {
			control: {
				type: 'text',
			},
		},
		onControlClick: {
			table: {
				disable: true,
			},
		},
		onLinkClick: {
			table: {
				disable: true,
			},
		},
		secondary: {
			control: {
				type: 'text',
			},
		},
		shape: {
			options: ['square', 'circle'],
		},
		title: {
			control: {
				type: 'text',
			},
		},
	},
	args: {
		actions: 'none',
		imageProps: {
			alt: '',
			src: '/cover.jpg',
			title: 'image title',
		},
		isCurrentContext: false,
		isFetching: false,
		isPlaying: false,
		isTrackLoading: false,
		linkTo: '/',
		onControlClick: fn(),
		onLinkClick: fn(),
		primary: 'Primary text',
		secondary: 'Secondary text',
		shape: 'square',
		title: 'Title text',
	},
};

export default card;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
	decorators: [Story => <Box width={200}><Story/></Box>],
};

export const WithAction: Story = {
	args: {
		actions: 'one',
	},
	decorators: [Story => <Box width={200}><Story/></Box>],
};

export const ShowingFallbackImage: Story = {
	args: {
		fallbackImage: <FallbackImage for="artist"/>,
		imageProps: {
			src: 'invalid',
		},
	},
	decorators: [Story => <Box width={200}><Story/></Box>],
};

export const CircularWithActions: Story = {
	args: {
		actions: 'two centered',
		shape: 'circle',
	},
	decorators: [Story => <Box width={200}><Story/></Box>],
};

export const CardRowLayout: Story = {
	render: args => {
		return (
			<CardRow>
				{
					Array.from(Array(13).keys()).map(item => (
						<CardRowItem key={item}>
							<Card {...args}/>
						</CardRowItem>
					))
				}
			</CardRow>
		);
	},
};

export const CarouselView: Story = {
	decorators: [Story => <Box position="relative" py={8}><Story/></Box>],
	render: args => {
		return (
			<CardCarousel>
				{
					Array.from(Array(13).keys()).map(item => (
						<CardCarouselItem key={item}>
							<Card {...args}/>
						</CardCarouselItem>
					))
				}
			</CardCarousel>
		);
	},
};
