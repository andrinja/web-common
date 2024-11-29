import type {Meta, StoryObj} from '@storybook/react';
import Slider, {SliderProps} from '@mui/material/Slider';

const slider: Meta<SliderProps> = {
	title: 'Components/Slider',
	component: Slider,
};

export default slider;

export const Default: StoryObj<SliderProps> = {};
