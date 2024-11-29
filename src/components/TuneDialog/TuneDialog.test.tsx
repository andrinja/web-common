import TuneDialog, {TuneDialogProps} from './';
import {fireEvent, render} from 'utils/test-utils';
import userEvent, {UserEvent} from '@testing-library/user-event';
import React from 'react';

const defaults: TuneDialogProps = {
	headings: {
		mood: 'Mood',
		preview: 'Preview',
		tempo: 'Tempo',
	},
	onChange: jest.fn(),
	onChangeCommitted: jest.fn(),
	onClose: jest.fn(),
	previews: [],
	open: true,
	playButton: <></>,
	sliders: {
		sensual: 2,
		angry: 1,
		happy: 6,
		sad: 4,
		tender: 0,
		tempo: 'medium',
		masterSlider: 'happy',
	},
	subtitle: 'subtitle',
	title: 'title',
};

let user: UserEvent;

beforeAll(() => {
	user = userEvent.setup();
});

test('Minimal properties', () => {
	const {getByText} = render(<TuneDialog {...defaults}/>);

	expect(getByText('Mood')).toBeInTheDocument();
	expect(getByText('Mood')).toBeVisible();
});

test('closed dialog', () => {
	const {queryByText} = render(<TuneDialog {...{...defaults, ...{open: false}}}/>);

	expect(queryByText('Mood')).toBeNull();
});

test('onClose', async() => {
	const handleClose = jest.fn();

	const {queryAllByRole} = render(<TuneDialog {...defaults} onClose={handleClose}/>);

	await user.click(queryAllByRole('button')[0]);
	expect(handleClose).toHaveBeenCalledTimes(1);
});

test('change handlers', async() => {
	const handleChange = jest.fn();
	const handleChangeCommitted = jest.fn();

	const {container, getByText} = render(
		<TuneDialog
			{...defaults}
			onChange={handleChange}
			onChangeCommitted={handleChangeCommitted}
			onClose={jest.fn()}
		/>
	);

	await user.click(getByText('High'));
	expect(handleChange).toHaveBeenCalledTimes(0);

	expect(handleChangeCommitted).toHaveBeenCalledTimes(1);

	const slider = container?.parentElement?.querySelector('input[type="range"]') as Element;

	fireEvent.change(slider, {target: {value: 0}});

	expect(handleChange).toHaveBeenCalledTimes(1);
	expect(handleChangeCommitted).toHaveBeenCalledTimes(2);
});

test('Preview', async() => {
	const {getByText} = render(
		<TuneDialog
			{...defaults}
			previews={[{album: 'Album', artist: 'Artist', playButton: <></>, src: 'src', title: 'Title'}]}
		/>
	);

	expect(getByText('Title')).toBeInTheDocument();
});

test('Display error', () => {
	const {getByText} = render(<TuneDialog {...defaults} error="This is an error."/>);

	expect(getByText('This is an error.')).toBeInTheDocument();
});

test('Preview without play button', async() => {
	const {getByText} = render(
		<TuneDialog
			{...defaults}
			previews={[{album: 'Album', artist: 'Artist', src: 'src', title: 'Title'}]}
		/>
	);

	expect(getByText('Title')).toBeInTheDocument();
});
