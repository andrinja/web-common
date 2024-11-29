import type {Meta, StoryObj} from '@storybook/react';
import PlayButton, {PlayButtonProps} from './';

const playButton: Meta<PlayButtonProps> = {
	component: PlayButton,
	argTypes: {
		isPlaying: {
			control: {
				type: 'boolean',
			},
		},
	},
	args: {
		isPlaying: false,
	},
};

export default playButton;

export const Default: StoryObj<PlayButtonProps> = {};
