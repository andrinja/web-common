import {fireEvent, render} from 'utils/test-utils';
import userEvent, {UserEvent} from '@testing-library/user-event';
import Card from './';
import FallbackImage from 'components/FallbackImage';
import React from 'react';

const defaults = {
	fallbackImage: <FallbackImage for="artist"/>,
	imageProps: {
		alt: '',
		src: '',
	},
	linkTo: '/',
	onControlClick: jest.fn(),
	primary: 'Primary text',
};

let user: UserEvent;

jest.mock('components/FallbackImage', () => {
	return ({for: forProp, children}: {for: string, children: React.ReactNode}) => (
		<div>
			<div>{forProp}</div>
			{children}
		</div>
	);
});

beforeAll(() => {
	user = userEvent.setup();
});

test('Minimal props', () => {
	const {getByText} = render(<Card imageProps={{alt: '', src: ''}} primary="Primary text"/>);

	expect(getByText('Primary text')).toBeInTheDocument();
});

test('shape prop', () => {
	const {getByText} = render(
		<Card imageProps={{alt: '', src: ''}} primary="Primary text" shape="circle"/>
	);

	expect(getByText('Primary text')).toBeInTheDocument();
});

test('onLinkClick', async() => {
	const handleLinkClick = jest.fn();
	const {getAllByRole} = render(
		<Card
			imageProps={{alt: '', src: ''}}
			onLinkClick={handleLinkClick}
			linkTo="/"
			primary="Primary text"
		/>
	);

	await user.click(getAllByRole('link')[0]);

	expect(handleLinkClick).toHaveBeenCalledTimes(1);
});

test('Show fallback image when image fails to load', () => {
	const {getByAltText, getByText} = render(
		<Card
			{...defaults}
			fallbackImage={<FallbackImage for="artist"/>}
			imageProps={{
				alt: 'Invalid image',
				src: 'invalid/path',
			}}
		/>
	);
	fireEvent.error(getByAltText('Invalid image'));
	expect(getByText('artist')).toBeInTheDocument();
});

test('Minimal props without state', async() => {
	const {container} = render(<Card {...defaults}/>);
	expect(container).not.toBeEmptyDOMElement();

	// Testing library has issues detecting the visibility CSS property on SVGs. The checks commented
	// out could potentially be activated as soon as the relevant issue is fixed:
	// https://github.com/testing-library/jest-dom/issues/209
	// expect(getByLabelText('Play')).not.toBeVisible();
	// expect(getByLabelText('Pause')).not.toBeVisible();
	// expect(getByLabelText('is playing')).not.toBeVisible();
	// expect(getByLabelText('loading')).not.toBeVisible();
});

test('isCurrentContext', () => {
	const {container} = render(<Card {...defaults} isCurrentContext/>);
	expect(container).not.toBeEmptyDOMElement();

	// expect(getByLabelText('Play')).not.toBeVisible();
	// expect(getByLabelText('Pause')).toBeVisible();
	// expect(getByLabelText('is playing')).not.toBeVisible();
	// expect(getByLabelText('loading')).not.toBeVisible();
});

test('isCurrentContext && isFetching', () => {
	const {container} = render(<Card {...defaults} isCurrentContext isFetching/>);
	expect(container).not.toBeEmptyDOMElement();

	// expect(getByLabelText('Play')).not.toBeVisible();
	// expect(getByLabelText('Pause')).not.toBeVisible();
	// expect(getByLabelText('is playing')).not.toBeVisible();
	// expect(getByLabelText('loading')).toBeVisible();
});

test('isCurrentContext && isPlaying', () => {
	const {container} = render(<Card {...defaults} isCurrentContext isPlaying/>);
	expect(container).not.toBeEmptyDOMElement();

	// expect(getByLabelText('Play')).not.toBeVisible();
	// expect(getByLabelText('Pause')).not.toBeVisible();
	// expect(getByLabelText('is playing')).toBeVisible();
	// expect(getByLabelText('loading')).not.toBeVisible();
});

test('isCurrentContext && isTrackLoading', () => {
	const {container} = render(<Card {...defaults} isCurrentContext isTrackLoading/>);
	expect(container).not.toBeEmptyDOMElement();

	// expect(getByLabelText('Play')).not.toBeVisible();
	// expect(getByLabelText('Pause')).not.toBeVisible();
	// expect(getByLabelText('is playing')).not.toBeVisible();
	// expect(getByLabelText('loading')).toBeVisible();
});

test('isCurrentContext && isFetching && isPlaying', () => {
	const {container} = render(<Card {...defaults} isCurrentContext isFetching isPlaying/>);
	expect(container).not.toBeEmptyDOMElement();

	// expect(getByLabelText('Play')).not.toBeVisible();
	// expect(getByLabelText('Pause')).not.toBeVisible();
	// expect(getByLabelText('is playing')).not.toBeVisible();
	// expect(getByLabelText('loading')).toBeVisible();
});

test('isCurrentContext && isFetching && isTrackLoading', () => {
	const {container} = render(<Card {...defaults} isCurrentContext isFetching isTrackLoading/>);
	expect(container).not.toBeEmptyDOMElement();

	// expect(getByLabelText('Play')).not.toBeVisible();
	// expect(getByLabelText('Pause')).not.toBeVisible();
	// expect(getByLabelText('is playing')).not.toBeVisible();
	// expect(getByLabelText('loading')).toBeVisible();
});

test('isCurrentContext && isPlaying && isTrackLoading', () => {
	const {container} = render(<Card {...defaults} isCurrentContext isPlaying isTrackLoading/>);
	expect(container).not.toBeEmptyDOMElement();

	// expect(getByLabelText('Play')).not.toBeVisible();
	// expect(getByLabelText('Pause')).not.toBeVisible();
	// expect(getByLabelText('is playing')).not.toBeVisible();
	// expect(getByLabelText('loading')).toBeVisible();
});

test('isCurrentContext && isFetching && isPlaying && isTrackLoading', () => {
	const {container} = render(
		<Card {...defaults} isCurrentContext isFetching isPlaying isTrackLoading/>
	);
	expect(container).not.toBeEmptyDOMElement();

	// expect(getByLabelText('Play')).not.toBeVisible();
	// expect(getByLabelText('Pause')).not.toBeVisible();
	// expect(getByLabelText('is playing')).not.toBeVisible();
	// expect(getByLabelText('loading')).toBeVisible();
});

test('isFetching', () => {
	const {container} = render(<Card {...defaults} isFetching/>);
	expect(container).not.toBeEmptyDOMElement();

	// expect(getByLabelText('Play')).not.toBeVisible();
	// expect(getByLabelText('Pause')).not.toBeVisible();
	// expect(getByLabelText('is playing')).not.toBeVisible();
	// expect(getByLabelText('loading')).toBeVisible();
});

test('isFetching && isPlaying', () => {
	const {container} = render(<Card {...defaults} isFetching isPlaying/>);
	expect(container).not.toBeEmptyDOMElement();

	// expect(getByLabelText('Play')).not.toBeVisible();
	// expect(getByLabelText('Pause')).not.toBeVisible();
	// expect(getByLabelText('is playing')).not.toBeVisible();
	// expect(getByLabelText('loading')).toBeVisible();
});

test('isFetching && isTrackLoading', () => {
	const {container} = render(<Card {...defaults} isFetching isTrackLoading/>);
	expect(container).not.toBeEmptyDOMElement();

	// expect(getByLabelText('Play')).not.toBeVisible();
	// expect(getByLabelText('Pause')).not.toBeVisible();
	// expect(getByLabelText('is playing')).not.toBeVisible();
	// expect(getByLabelText('loading')).toBeVisible();
});

test('isFetching && isPlaying && isTrackLoading', () => {
	const {container} = render(<Card {...defaults} isFetching isPlaying isTrackLoading/>);
	expect(container).not.toBeEmptyDOMElement();

	// expect(getByLabelText('Play')).not.toBeVisible();
	// expect(getByLabelText('Pause')).not.toBeVisible();
	// expect(getByLabelText('is playing')).not.toBeVisible();
	// expect(getByLabelText('loading')).toBeVisible();
});

test('isPlaying', () => {
	const {container} = render(<Card {...defaults} isPlaying/>);
	expect(container).not.toBeEmptyDOMElement();

	// expect(getByLabelText('Play')).not.toBeVisible();
	// expect(getByLabelText('Pause')).not.toBeVisible();
	// expect(getByLabelText('is playing')).not.toBeVisible();
	// expect(getByLabelText('loading')).not.toBeVisible();
});

test('isPlaying && isTrackLoading', () => {
	const {container} = render(<Card {...defaults} isPlaying isTrackLoading/>);
	expect(container).not.toBeEmptyDOMElement();

	// expect(getByLabelText('Play')).not.toBeVisible();
	// expect(getByLabelText('Pause')).not.toBeVisible();
	// expect(getByLabelText('is playing')).not.toBeVisible();
	// expect(getByLabelText('loading')).not.toBeVisible();
});

test('isTrackLoading', () => {
	const {container} = render(<Card {...defaults} isTrackLoading/>);
	expect(container).not.toBeEmptyDOMElement();

	// expect(getByLabelText('Play')).not.toBeVisible();
	// expect(getByLabelText('Pause')).not.toBeVisible();
	// expect(getByLabelText('is playing')).not.toBeVisible();
	// expect(getByLabelText('loading')).not.toBeVisible();
});
