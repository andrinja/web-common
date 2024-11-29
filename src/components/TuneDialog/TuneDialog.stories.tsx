import type {Meta, StoryObj} from '@storybook/react';
import React, {useCallback, useState} from 'react';
import TuneDialog, {Props as TuneDialogProps} from './TuneDialog';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {FILLER_TEXT} from '../../setupStorybook';
import Icon from '../Icon';
import IconButton from '@mui/material/IconButton';
import {Sliders} from './TuneDialogContent';
import {fn} from '@storybook/test';

const slider: Meta<TuneDialogProps> = {
	component: TuneDialog,
	argTypes: {
		error: {
			control: {
				type: 'text',
			},
		},
	},
	args: {
		headings: {
			mood: 'Mood',
			preview: 'Preview',
			tempo: 'Tempo',
		},
		onChange: fn(),
		onChangeCommitted: fn(),
		sliders: {
			sensual: 3,
			angry: 2,
			happy: 7,
			sad: 5,
			tender: 1,
			tempo: 'medium',
			masterSlider: 'happy',
		},
		onClose: fn(),
		open: true,
		playButton: (
			<Button onClick={fn(() => null)} variant="contained" sx={{textTransform: 'uppercase'}}>
				Play
			</Button>
		),
		previews: new Array(5).fill('').map((_, i) => ({
			album: 'Album',
			artist: 'Artist',
			playButton: <IconButton><Icon name="PreviewTrack" fontSize="large"/></IconButton>,
			src: './cover.jpg',
			title: `Title ${i + 1}`,
		})),
		subtitle: 'Joe\'s Radio',
		title: 'Tune',
	},
	parameters: {
		docs: {
			story: {
				iframeHeight: 400,
				inline: false,
			},
		},
	},
	decorators: [
		Story => (
			<Box>
				{FILLER_TEXT}
				<Story/>
			</Box>
		),
	],
};

export default slider;

export const Default: StoryObj<TuneDialogProps> = {
	render: args => {
		const [sliders, setSliders] = useState(args.sliders);

		const handleChange = useCallback((sliders: Sliders) => {
			args.onChange(sliders);
			setSliders(sliders);
		}, [args]);

		const handleChangeCommitted = useCallback((sliders: Sliders) => {
			args.onChangeCommitted(sliders);
			setSliders(sliders);
		}, [args]);

		return (
			<TuneDialog
				{...args as TuneDialogProps}
				onChange={handleChange}
				onChangeCommitted={handleChangeCommitted}
				sliders={sliders}
			/>
		);
	},
};
