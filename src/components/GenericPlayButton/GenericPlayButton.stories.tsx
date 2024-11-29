import GenericPlayButton, {GenericPlayButtonProps} from './';
import type {Meta, StoryObj} from '@storybook/react';
import Box from '@mui/material/Box';
import React from 'react';
import {fn} from '@storybook/test';

type StoryProps = GenericPlayButtonProps & {
	enableHover: boolean
	isBusy: boolean
	isPaused: boolean
	isPlaying: boolean
	isReadyToPlay: boolean
	showPlayByDefault: boolean
};

const genericPlayButton: Meta<StoryProps> = {
	component: GenericPlayButton,
	argTypes: {
		enableHover: {
			control: {
				type: 'boolean',
			},
		},
		isBusy: {
			control: {
				type: 'boolean',
			},
		},
		isPaused: {
			control: {
				type: 'boolean',
			},
		},
		isReadyToPlay: {
			control: {
				type: 'boolean',
			},
		},
		showPlayByDefault: {
			control: {
				type: 'boolean',
			},
		},
	},
	args: {
		enableHover: true,
		isBusy: false,
		isPaused: false,
		isPlaying: false,
		isReadyToPlay: true,
		onClick: fn(),
		showPlayByDefault: true,
	},
};

export default genericPlayButton;

export const Default: StoryObj<StoryProps> = {
	render: args => {
		return (
			<Box
				bgcolor="error.main"
				height={80}
				sx={theme => theme.mixins.genericPlayButton({
					enableHover: args.enableHover,
					isBusy: args.isBusy,
					isPaused: args.isPaused,
					isPlaying: args.isPlaying,
					isReadyToPlay: args.isReadyToPlay,
					showPlayByDefault: args.showPlayByDefault,
				})}
				width={80}
			>
				<GenericPlayButton onClick={args.onClick}/>
			</Box>
		);
	},
};
