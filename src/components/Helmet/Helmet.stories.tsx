import {Description, Source, Subtitle, Title} from '@storybook/addon-docs';
import Helmet, {HelmetProps} from './';
import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';

const helmet: Meta<HelmetProps> = {
	component: Helmet,
	parameters: {
		docs: {
			description: {
				component: 'The Helmet will manage all of your changes to the document head.',
			},
			page: () => (
				<>
					<Title/>
					<Subtitle/>
					<Description/>
					<Source/>
				</>
			),
		},
		parameters: {
			docs: {
				docs: {
					page: null,
				},
				source: {
					state: 'open',
				},
			},
		},
		previewTabs: {
			canvas: {
				hidden: true,
			},
		},
		viewMode: 'docs',
	},
};

export default helmet;

export const Default: StoryObj<HelmetProps> = {args: {title: 'Page title'}};
