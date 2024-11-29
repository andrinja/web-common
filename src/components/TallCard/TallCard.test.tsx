import TallCard, {Mode} from './TallCard';
import userEvent, {UserEvent} from '@testing-library/user-event';
import React from 'react';
import {render} from 'utils/test-utils';

const defaults = {
	imgSrc: 'image-src.jpg',
	imgTitle: 'Image title',
	title: 'Card title',
};

let user: UserEvent;

beforeAll(() => {
	user = userEvent.setup();
});

test('Minimal props', () => {
	const {getByText} = render(<TallCard {...defaults}/>);
	expect(getByText(defaults.imgTitle)).toBeInTheDocument();
	expect(getByText(defaults.title)).toBeInTheDocument();
});

test('onClick handler', async() => {
	const handleClick = jest.fn();
	const {getAllByRole} = render(<TallCard {...defaults} onClick={handleClick}/>);

	await user.click(getAllByRole('button')[0]);
	expect(handleClick).toHaveBeenCalledTimes(1);
});

test('CircularProgress is displayed when isTrackLoading and isCurrentContext are true', () => {
	const {getByLabelText} = render(<TallCard {...defaults} isTrackLoading isCurrentContext/>);
	expect(getByLabelText('loading')).toBeInTheDocument();
});

test('VolumeUp icon is visible', () => {
	const {getByLabelText} = render(<TallCard {...defaults} isCurrentContext isPlaying/>);
	const volumeUpIcon = getByLabelText('is playing');
	expect(volumeUpIcon).toBeInTheDocument();
});

test('Pause icon is visible', () => {
	const {getByLabelText} = render(<TallCard {...defaults} isCurrentContext/>);
	const pauseIcon = getByLabelText('Pause');
	expect(pauseIcon).toBeInTheDocument();
});

test('PlayArrow icon is visible', () => {
	const {getByLabelText} = render(<TallCard {...defaults}/>);
	const playArrowIcon = getByLabelText('Play');
	expect(playArrowIcon).toBeInTheDocument();
});

test('Mode is displayed when provided', () => {
	const mode: Mode = {
		color: 'happy',
		icon: 'spa_active',
		name: 'Calm',
	};
	const {getByText} = render(<TallCard {...defaults} mode={mode}/>);
	const modeName = getByText(mode.name);
	expect(modeName).toBeInTheDocument();
});
