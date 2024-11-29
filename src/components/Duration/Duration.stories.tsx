import Duration, {DurationProps} from './';
import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';

const duration: Meta<DurationProps & {itemType: string, seconds: number}> = {
	component: Duration,
	argTypes: {
		duration: {
			table: {
				disable: true,
			},
		},
		item: {
			table: {
				disable: true,
			},
		},
		itemType: {
			control: {
				type: 'radio',
			},
			options: ['single track', 'multiple tracks'],
		},
		seconds: {
			type: {name: 'number', required: true},
		},
	},
	args: {
		itemType: 'single track',
		seconds: 4321,
	},
	parameters: {
		docs: {
			description: {
				component: 'Formats a duration for being displayed in the UI.',
			},
		},
	},
};

export default duration;

export const Default: StoryObj<DurationProps & {itemType: string, seconds: number}> = {
	render: args => {
		return (
			<Duration
				item={
					args.itemType === 'single track'
						? {getDuration: () => args.seconds}
						: {getTracks: () => [{getDuration: () => args.seconds}]}
				}
			/>
		);
	},
};
