import CardRow, {CardRowItem, CardRowProps} from './';
import type {Meta, StoryObj} from '@storybook/react';
import Card from 'components/Card';
import React from 'react';

const card: Meta<CardRowProps> = {
	component: CardRow,
	argTypes: {
		children: {
			control: false,
		},
	},
};

export default card;

export const Default: StoryObj<CardRowProps> = {
	render: args => {
		return (
			<CardRow {...args}>
				{
					Array.from(Array(13).keys()).map(item => (
						<CardRowItem key={item}>
							<Card imageProps={{alt: 'alt text', src: '/cover.jpg'}} primary="Card text"/>
						</CardRowItem>
					))
				}
			</CardRow>
		);
	},
};
