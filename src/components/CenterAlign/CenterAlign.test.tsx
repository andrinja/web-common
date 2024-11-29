import CenterAlign from './CenterAlign';
import React from 'react';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	expect(() => <CenterAlign/>).not.toThrowError();
});

test('With children', () => {
	const {getByText} = render(<CenterAlign><p>content</p></CenterAlign>);

	expect(getByText('content')).toBeInTheDocument();
});
