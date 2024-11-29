import MoodSliders, {Slider} from './';
import {fireEvent, render} from 'utils/test-utils';
import React from 'react';

const sliders: Slider[] = [
	{mood: 'sensual', value: 3},
	{mood: 'angry', value: 2},
	{mood: 'happy', value: 7},
	{mood: 'sad', value: 5},
	{mood: 'tender', value: 1},
];

test('Basic rendering', () => {
	const {getByText} = render(
		<MoodSliders onChange={jest.fn()} onChangeCommitted={jest.fn()} sliders={sliders}/>
	);

	expect(getByText('Sensual')).toBeInTheDocument();
	expect(getByText('Happy')).toBeInTheDocument();
});

test('Change event', () => {
	const handleChange = jest.fn((sliders, masterSlider) => {
		expect(sliders[0].mood).toBe('sensual');
		expect(sliders[0].value).toBe(1);
		expect(masterSlider).toBe('sensual');
	});
	const handleChangeCommitted = jest.fn((sliders, masterSlider) => {
		expect(sliders[0].mood).toBe('sensual');
		expect(sliders[0].value).toBe(1);
		expect(masterSlider).toBe('sensual');
	});

	const {container} = render(
		<MoodSliders
			onChange={handleChange}
			onChangeCommitted={handleChangeCommitted}
			sliders={sliders}
		/>
	);

	const slider = container.querySelector('input[type="range"]') as Element;

	// Even without event.preventDefault(), fireEvent.keyDown() would not cause the "change" event to
	// be triggered. Therefore, the events fired here are just for covering the lines of code, but not
	// actually checking the functionality. However, the userEvent library seems to have problems with
	// range sliders as per https://github.com/testing-library/user-event/issues/871. Ideally, the
	// method used here would be:
	// const user = userEvent.setup();
	// user.type(slider, '[ArrowRight]');
	// This, however, incorrectly ALWAYS triggers the "change" event, no matter the "keyDown" event
	// prevention.
	fireEvent.keyDown(slider, {key: 'ArrowLeft'});
	fireEvent.keyDown(slider, {key: 'ArrowRight'});
	fireEvent.keyDown(slider, {key: 'a'});

	fireEvent.change(slider, {target: {value: 1}});

	expect(handleChange).toHaveBeenCalledTimes(1);
	expect(handleChangeCommitted).toHaveBeenCalledTimes(1);
});