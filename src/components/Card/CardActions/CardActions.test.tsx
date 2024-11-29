import CardActions from './';
import React from 'react';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	const {getByText} = render(<CardActions>action</CardActions>);

	expect(getByText('action')).toBeInTheDocument();
});

test('alignment prop', () => {
	const {getByText} = render(<CardActions alignment="center">action</CardActions>);

	expect(getByText('action')).toBeInTheDocument();
});
