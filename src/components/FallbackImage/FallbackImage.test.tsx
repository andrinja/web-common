import {FallbackImage} from './';
import React from 'react';
import {render} from 'utils/test-utils';

jest.mock('components/Icon', () => {
	return ({name}: {name: string}) => <div>{name}</div>;
});

test('Renders with Artist', () => {
	const type = 'artist';
	const {getByText} = render(<FallbackImage for={type}/>);
	expect(getByText('MicExternal')).toBeInTheDocument();
});

test('Renders with Playlist', () => {
	const type = 'playlist';
	const {getByText} = render(<FallbackImage for={type}/>);
	expect(getByText('FormatListBulleted')).toBeInTheDocument();
});

test('Renders with Radio', () => {
	const type = 'radio';
	const {getByText} = render(<FallbackImage for={type}/>);
	expect(getByText('RadioLogo')).toBeInTheDocument();
});

test('Renders with Release', () => {
	const type = 'release';
	const {getByText} = render(<FallbackImage for={type}/>);
	expect(getByText('Album')).toBeInTheDocument();
});

test('Renders with Track', () => {
	const type = 'track';
	const {getByText} = render(<FallbackImage for={type}/>);
	expect(getByText('AndroidNowPlaying')).toBeInTheDocument();
});

test('Renders generic icon', () => {
	const {getByText} = render(<FallbackImage/>);
	expect(getByText('music_note')).toBeInTheDocument();
});
