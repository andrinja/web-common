import ChevronLink, {ChevronLinkProps} from './';
import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';

const chevronLink: Meta<ChevronLinkProps> = {
	component: ChevronLink,
	argTypes: {
		alignment: {
			control: {
				type: 'inline-radio',
			},
			options: ['left', 'right'],
		},
		children: {
			control: {
				type: 'text',
			},
		},
	},
	args: {
		alignment: 'right',
		children: 'See all',
	},
};

export default chevronLink;

export const Default: StoryObj<ChevronLinkProps> = {args: {href: '/', title: 'See all button'}};

export const Disabled: StoryObj<ChevronLinkProps<'button'>> = {
	args: {
		disabled: true,
	},
	render: args => {
		function ButtonLink(props: ChevronLinkProps<'button'>) {
			return <ChevronLink component="button" {...props}/>;
		}

		return <ButtonLink component="button" {...args}/>;
	},
};
