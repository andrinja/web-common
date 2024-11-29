import MoodSlider, {Mood, SliderValue, Slider} from './MoodSlider';
import React, {useCallback} from 'react';
import Grid from '@mui/material/Grid';
import {useTranslation} from 'react-i18next';

type SliderLabels = {
	[key in Mood]: string
};

export type Props = {
	onChange: (sliders: Slider[], masterSlider: Mood) => void
	onChangeCommitted: (sliders: Slider[], masterSlider: Mood) => void
	sliders: Slider[]
};

export default function MoodSliders({onChange, onChangeCommitted, sliders}: Props) {
	const {t} = useTranslation();

	const sliderLabels: SliderLabels = {
		sensual: t('Sensual'),
		angry: t('Angry'),
		happy: t('Happy'),
		sad: t('Sad'),
		tender: t('Tender'),
	};

	const updatedSliders = useCallback((mood: Mood, value: SliderValue) => {
		return sliders.map(slider => {
			const updatedSlider: Slider = {
				mood: slider.mood,
				value: slider.mood === mood ? value : slider.value,
			};
			return updatedSlider;
		});
	}, [sliders]);

	const handleSliderChange = useCallback((mood: Mood, value: SliderValue) => {
		onChange(updatedSliders(mood, value), mood);
	}, [onChange, updatedSliders]);

	const handleSliderChangeCommitted = useCallback((mood: Mood, value: SliderValue) => {
		onChangeCommitted(updatedSliders(mood, value), mood);
	}, [onChangeCommitted, updatedSliders]);

	return (
		<Grid container justifyContent="space-between">
			{sliders.map(slider => (
				<Grid item key={slider.mood}>
					<MoodSlider
						label={sliderLabels[slider.mood]}
						onChange={(value: SliderValue) => handleSliderChange(slider.mood, value)}
						onChangeCommitted={
							(value: SliderValue) => handleSliderChangeCommitted(slider.mood, value)
						}
						slider={slider}
					/>
				</Grid>
			))}
		</Grid>
	);
}
