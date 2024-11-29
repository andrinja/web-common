import type {Meta, StoryObj} from '@storybook/react';
import NavigationArrows, {NavigationArrowsProps} from './';
import {fn} from '@storybook/test';

const navigationArrows: Meta<NavigationArrowsProps> = {
	component: NavigationArrows,
	argTypes: {
		disableBack: {
			control: {
				type: 'boolean',
			},
		},
		disableForward: {
			control: {
				type: 'boolean',
			},
		},
		tooltipBack: {
			control: {
				type: 'text',
			},
		},
		tooltipForward: {
			control: {
				type: 'text',
			},
		},
	},
	args: {
		disableBack: false,
		disableForward: false,
		onClick: fn(),
		tooltipBack: 'Go Back',
		tooltipForward: 'Go Forward',
	},
};

export default navigationArrows;

export const Default: StoryObj<NavigationArrowsProps> = {};
