import {default as MuiSlider, SliderProps, SliderThumb} from '@mui/material/Slider';
import React, {KeyboardEvent, ReactNode} from 'react';
import Box from '@mui/material/Box';
import Icon from '../Icon';
import Typography from '@mui/material/Typography';

export type Mood = 'sensual' | 'angry' | 'happy' | 'sad' | 'tender';
export type SliderValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface Slider {
	mood: Mood
	value: SliderValue
}

type ThumbProps = {
	children: ReactNode
	mood: Mood
} & typeof SliderThumb;

function Thumb({children, mood, ...rest}: ThumbProps) {
	return (
		<SliderThumb {...rest}>
			{children}
			<Icon
				name={mood}
				sx={
					theme => ({
						color: theme.palette.moods[mood].light,
					})
				}
			/>
		</SliderThumb>
	);
}

export type Props = {
	label: string
	onChange: (value: SliderValue) => void
	onChangeCommitted: (value: SliderValue) => void
	slider: Slider
} & Omit<SliderProps, 'onChange' | 'onChangeCommitted'>;

export default function MoodSlider({label, onChange, onChangeCommitted, slider, ...rest}: Props) {
	function preventHorizontalKeyboardNavigation(event: KeyboardEvent) {
		if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
			event.preventDefault();
		}
	}

	// Flipping a 0 slider value into 1 to sanitize potentially broken API response
	const valueIndex = (slider.value || 1) - 1;
	const valueMapping = [13.5, 25, 36.5, 48, 60, 71.5, 83];

	return (
		<Box alignItems="center" display="flex" flexDirection="column" gap={1}>
			<Box sx={{height: 180}}>
				<MuiSlider
					aria-label={label}
					value={valueMapping[valueIndex]}
					marks={valueMapping.map(value => ({value}))}
					onChange={(_, value) => {
						onChange((valueMapping.indexOf(value as number) + 1) as SliderValue);
					}}
					onChangeCommitted={(_, value) => {
						onChangeCommitted((valueMapping.indexOf(value as number) + 1) as SliderValue);
					}}
					onKeyDown={preventHorizontalKeyboardNavigation}
					orientation="vertical"
					slots={{thumb: Thumb}}
					slotProps={{thumb: {mood: slider.mood}}}
					step={null}
					sx={theme => ({
						borderRadius: 27,
						color: theme.palette.common.white,
						height: 1,
						padding: 0,
						width: 54,
						'& input[type="range"]': {
							WebkitAppearance: 'slider-vertical',
						},
						'.MuiSlider-mark': {
							visibility: 'hidden',
						},
						'.MuiSlider-thumb': {
							color: theme.palette.moods[slider.mood].medium,
							height: 50,
							width: 50,
							':before': {
								boxShadow: 'none',
							},
							':hover': {
								boxShadow: `0 0 0 8px ${theme.palette.moods[slider.mood].hover}`,
							},
							'&.Mui-focusVisible': {
								boxShadow: `0 0 0 8px ${theme.palette.moods[slider.mood].hover}`,
							},
							'&.Mui-active': {
								boxShadow: `0 0 0 14px ${theme.palette.moods[slider.mood].hover}`,
							},
						},
						'.MuiSlider-rail': {
							border: `3px solid ${theme.palette.common.white}`,
							opacity: 1,
						},
						'.MuiSlider-track': {
							border: 0,
							borderRadius: 27,
							color: theme.palette.moods[slider.mood].main,
							marginBottom: '-3px',
							paddingTop: '30px',
							width: 54,
						},
					})}
					{...rest}
				/>
			</Box>
			<Typography color="text.secondary" variant="overline">{label}</Typography>
		</Box>
	);
}
