import CardGrid, {CardGridItem, CardGridProps} from './';
import type {Meta, StoryObj} from '@storybook/react';
import Card from 'components/Card';
import React from 'react';

const card: Meta<CardGridProps> = {
	component: CardGrid,
	argTypes: {
		children: {
			control: false,
		},
	},
};

export default card;

export const Default: StoryObj<CardGridProps> = {
	render: args => {
		return (
			<CardGrid {...args}>
				{
					Array.from(Array(13).keys()).map(item => (
						<CardGridItem key={item}>
							<Card imageProps={{alt: 'alt text', src: '/cover.jpg'}} primary="Card text"/>
						</CardGridItem>
					))
				}
			</CardGrid>
		);
	},
};
