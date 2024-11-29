import userEvent, {UserEvent} from '@testing-library/user-event';
import React from 'react';
import SlimCard from './SlimCard';
import {render} from 'utils/test-utils';

let user: UserEvent;

beforeAll(() => {
	user = userEvent.setup();
});

test('Minimal props', () => {
	const {getByText} = render(<SlimCard title="Card title"/>);
	expect(getByText('Card title')).toBeInTheDocument();
});

test('onClick handler', async() => {
	const handleClick = jest.fn();
	const {getByRole} = render(<SlimCard onClick={handleClick} title="Card title"/>);

	await user.click(getByRole('button'));
	expect(handleClick).toHaveBeenCalledTimes(1);
});

test('In loading state when isTrackLoading and isCurrentContext are true', () => {
	const {getByRole} = render(<SlimCard isTrackLoading isCurrentContext title="Card title"/>);
	expect(getByRole('progressbar')).toBeVisible();
});

test('Not in loading state when isFetching and isTrackLoading are false', () => {
	const {queryAllByRole} = render(<SlimCard title="Card title"/>);
	expect(queryAllByRole('progressbar').length).toBe(0);
});

test('Show indication when currently playing', () => {
	const {getByTitle} = render(<SlimCard isCurrentContext isPlaying title="Card title"/>);
	const volumeUpIcon = getByTitle('is playing');
	expect(volumeUpIcon).toBeInTheDocument();
});

test('Pause icon is visible', () => {
	const {getByTitle} = render(<SlimCard isCurrentContext title="Card title"/>);
	const pauseIcon = getByTitle('Pause');
	expect(pauseIcon).toBeInTheDocument();
});

test('Play icon is visible', () => {
	const {getAllByTitle} = render(<SlimCard title="Card title"/>);
	const playArrowIcons = getAllByTitle('Play');
	expect(playArrowIcons[playArrowIcons.length - 1]).toBeInTheDocument();
});
