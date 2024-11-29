import type {Meta, StoryObj} from '@storybook/react';
import MoodSliders, {Mood, MoodSlidersProps, Slider} from './';
import Box from '@mui/material/Box';
import React, {useCallback, useState} from 'react';
import {fn} from '@storybook/test';

const slider: Meta<MoodSlidersProps> = {
	component: MoodSliders,
	args: {
		onChange: fn(),
		sliders: [
			{mood: 'sensual', value: 3},
			{mood: 'angry', value: 2},
			{mood: 'happy', value: 7},
			{mood: 'sad', value: 5},
			{mood: 'tender', value: 1},
		],
	},
	decorators: [Story => <Box width={350}><Story/></Box>],
};

export default slider;

export const Default: StoryObj<MoodSlidersProps> = {
	render: args => {
		const [sliders, setSliders] = useState(args.sliders);

		const handleChange = useCallback((sliders: Slider[], masterSlider: Mood) => {
			args.onChange(sliders, masterSlider);
			setSliders(sliders);
		}, [args]);

		const handleChangeCommitted = useCallback((sliders: Slider[], masterSlider: Mood) => {
			args.onChangeCommitted(sliders, masterSlider);
			setSliders(sliders);
		}, [args]);

		return (
			<MoodSliders
				{...args}
				onChange={handleChange}
				onChangeCommitted={handleChangeCommitted}
				sliders={sliders}
			/>
		);
	},
};
