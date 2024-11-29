import Link, {LinkProps} from '@mui/material/Link';
import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';

const link: Meta<LinkProps & {text: string}> = {
	title: 'Components/Link',
	component: Link,
	argTypes: {
		color: {
			control: {
				type: 'inline-radio',
			},
			options: ['primary', 'secondary'],
		},
	},
	args: {
		color: 'secondary',
		text: 'I am the link',
	},
};

export default link;

export const Default: StoryObj<LinkProps & {text: string}> = {
	render: ({text, ...rest}) => {
		return <Link href="#" {...rest}>{text}</Link>;
	},
};