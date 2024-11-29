import ArticlePlayButton from './ArticlePlayButton';
import React from 'react';
import {render} from 'utils/test-utils';
import userEvent, {UserEvent} from '@testing-library/user-event';

let user: UserEvent;

beforeAll(() => {
	user = userEvent.setup();
});

test('no props', () => {
	const {container} = render(<ArticlePlayButton/>);

	expect(container).toBeEmptyDOMElement();
});

test('providing onPlayClick', async() => {
	const handlePlayClick = jest.fn();
	const {getByLabelText, getByTitle} = render(<ArticlePlayButton onPlayClick={handlePlayClick}/>);

	expect(getByLabelText('Play')).toBeVisible();
	expect(getByLabelText('Pause')).not.toBeVisible();
	expect(getByTitle('is playing')).not.toBeVisible();
	expect(getByTitle('loading')).not.toBeVisible();

	await user.click(getByLabelText('Play'));
	expect(handlePlayClick).toHaveBeenCalledTimes(1);
});

test('isFetching', async() => {
	const handlePlayClick = jest.fn();
	const {getByLabelText, getByTitle} = render(
		<ArticlePlayButton isFetching onPlayClick={handlePlayClick}/>
	);

	expect(getByLabelText('Play')).not.toBeVisible();
	expect(getByLabelText('Pause')).not.toBeVisible();
	expect(getByTitle('is playing')).not.toBeVisible();
	expect(getByTitle('loading')).toBeVisible();

	await user.click(getByTitle('loading'));
	expect(handlePlayClick).not.toHaveBeenCalled();
});

test('isTrackLoading and isCurrentContent', async() => {
	const handlePlayClick = jest.fn();
	const {getByLabelText, getByTitle} = render(
		<ArticlePlayButton isCurrentContext isTrackLoading onPlayClick={handlePlayClick}/>
	);

	expect(getByLabelText('Play')).not.toBeVisible();
	expect(getByLabelText('Pause')).not.toBeVisible();
	expect(getByTitle('is playing')).not.toBeVisible();
	expect(getByTitle('loading')).toBeVisible();

	await user.click(getByTitle('loading'));
	expect(handlePlayClick).not.toHaveBeenCalled();
});

test('isPlaying and isCurrentContent', async() => {
	const handlePlayClick = jest.fn();
	const {getByLabelText, getByTitle} = render(
		<ArticlePlayButton isCurrentContext isPlaying onPlayClick={handlePlayClick}/>
	);

	expect(getByLabelText('Play')).not.toBeVisible();
	expect(getByLabelText('Pause')).toBeVisible();
	expect(getByTitle('is playing')).not.toBeVisible();
	expect(getByTitle('loading')).not.toBeVisible();

	await user.click(getByLabelText('Pause'));
	expect(handlePlayClick).toHaveBeenCalledTimes(1);
});

test('isCurrentContent', async() => {
	const handlePlayClick = jest.fn();
	const {getByLabelText, getByTitle} = render(
		<ArticlePlayButton isCurrentContext onPlayClick={handlePlayClick}/>
	);

	expect(getByLabelText('Play')).toBeVisible();
	expect(getByLabelText('Pause')).not.toBeVisible();
	expect(getByTitle('is playing')).not.toBeVisible();
	expect(getByTitle('loading')).not.toBeVisible();

	await user.click(getByLabelText('Play'));
	expect(handlePlayClick).toHaveBeenCalledTimes(1);
});

test('playIcon', async() => {
	const handlePlayClick = jest.fn();
	const {getByLabelText} = render(
		<ArticlePlayButton onPlayClick={handlePlayClick} playIcon="RadioLogo"/>
	);

	expect(getByLabelText('Play')).toBeVisible();
});
