import ErrorPage, {ErrorPageProps} from './';
import type {Meta, StoryObj} from '@storybook/react';
import Box from '@mui/material/Box';
import CommonError from 'errors/CommonError';
import React from 'react';

const errorPage: Meta<ErrorPageProps> = {
	component: ErrorPage,
	argTypes: {
		error: {
			control: false,
		},
	},
	parameters: {
		docs: {
			description: {
				component: 'Error page with title, caption and image.',
			},
			story: {
				iframeHeight: 500,
				inline: false,
			},
		},
	},
};

export default errorPage;

export const Default: StoryObj<ErrorPageProps> = {
	render: args => (
		<Box border={1} height={500}>
			<ErrorPage {...args} error={new CommonError('Oops…', 'Is not you is us :)')}/>
		</Box>
	),
};

export const WithAction: StoryObj<ErrorPageProps> = {
	parameters: {
		docs: {
			description: {
				story: 'Error page with with action button.',
			},
		},
	},
	render: () => (
		<Box border={1} height={700}>
			<ErrorPage
				error={new CommonError(
					'Oops…',
					'Is not you is us :)',
					'ErrorInternet',
					() => {
						console.log('You pressed on button');
					},
					'Press me'
				)}
			/>
		</Box>
	),
};
