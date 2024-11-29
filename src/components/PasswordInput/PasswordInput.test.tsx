import {fireEvent, render} from 'utils/test-utils';
import PasswordInput from './PasswordInput';
import React from 'react';

const label = 'label';

test('Minimal properties', () => {
	const {getByLabelText, getByRole} = render(<PasswordInput label={label}/>);

	expect(getByLabelText(label)).toHaveAttribute('type', 'password');
	expect(getByRole('button')).toBeInTheDocument();
});

test('Toggle visibility', () => {
	const {getByLabelText, getByRole} = render(<PasswordInput label={label}/>);

	expect(getByRole('button')).toBeInTheDocument();
	expect(getByLabelText(label)).toHaveAttribute('type', 'password');
	fireEvent.click(getByRole('button'));
	expect(getByLabelText(label)).toHaveAttribute('type', 'text');
	fireEvent.click(getByRole('button'));
	expect(getByLabelText(label)).toHaveAttribute('type', 'password');
});
