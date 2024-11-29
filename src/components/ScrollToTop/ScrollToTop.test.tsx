import React from 'react';
import ScrollToTop from './ScrollToTop';
import {render} from 'utils/test-utils';

beforeAll(() => {
	window.scrollTo = jest.fn();
});

afterAll(() => {
	jest.clearAllMocks();
});

test('Default', () => {
	const {getByText} = render(<ScrollToTop>child</ScrollToTop>);
	expect(getByText('child')).toBeInTheDocument();
});
