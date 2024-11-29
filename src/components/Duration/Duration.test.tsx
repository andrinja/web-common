import Duration from './Duration';
import React from 'react';
import {render} from 'utils/test-utils';

const shortTrackMock = {getDuration: () => 321};
const longTrackMock = {getDuration: () => 4321};

test('Format duration for a single track of less than an hour', () => {
	const {getByText} = render(<Duration item={shortTrackMock}/>);

	expect(getByText('5:21')).toBeInTheDocument();
});

test('Format duration for a single track of more than an hour', () => {
	const {getByText} = render(<Duration item={longTrackMock}/>);

	expect(getByText('1:12:01')).toBeInTheDocument();
});

test('Format duration for multiple tracks of less than an hour', () => {
	const {getByText} = render(<Duration item={{getTracks: () => [shortTrackMock]}}/>);

	expect(getByText('5 min')).toBeInTheDocument();
});

test('Format duration for a single track of more than an hour', () => {
	const {getByText} = render(<Duration item={{getTracks: () => [longTrackMock]}}/>);

	expect(getByText('1 h 12 min')).toBeInTheDocument();
});

test('duration prop', () => {
	const {getByText} = render(<Duration duration={321}/>);

	expect(getByText('5:21')).toBeInTheDocument();
});

test('Without any props', () => {
	console.error = jest.fn();
	expect(() => render(<Duration/>)).toThrow();
});

test('Try formatting an invalid object', () => {
	console.error = jest.fn();
	expect(() => render(<Duration item={{}}/>)).toThrow();
});
