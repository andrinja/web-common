import TempoToggler from './';
import React from 'react';
import {render} from 'utils/test-utils';
import userEvent from '@testing-library/user-event';

test('Basic rendering', () => {
	const {getByText} = render(
		<TempoToggler onChange={jest.fn()}/>
	);

	expect(getByText('Low')).toBeInTheDocument();
	expect(getByText('Medium')).toBeInTheDocument();
	expect(getByText('High')).toBeInTheDocument();
});

test('onChange', async() => {
	const user = userEvent.setup();
	const handleChange = jest.fn();
	const {getByText} = render(
		<TempoToggler onChange={handleChange}/>
	);

	await user.click(getByText('High'));

	expect(handleChange).toHaveBeenCalledTimes(1);
	expect(handleChange).toHaveBeenLastCalledWith('high');
});
