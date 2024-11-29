import {fireEvent, render} from 'utils/test-utils';
import Dialog from './Dialog';
import React from 'react';

test('Minimal properties', () => {
	const {container} = render(<Dialog open={true}/>);
	expect(container?.parentElement?.childNodes.length).toBe(2);
});

test('With fixedWith property', () => {
	const {container} = render(<Dialog fixedWidth open={true}/>);
	expect(container?.parentElement?.childNodes.length).toBe(2);
});

test('Has close icon', () => {
	const {container} = render(
		<Dialog closable open={true}/>
	);
	expect(container?.parentElement?.childNodes.length).toBe(2);
});

test('onClose', () => {
	const handleClick = jest.fn();
	const {getByRole} = render(<Dialog closable onClose={handleClick} open={true}/>);

	expect(getByRole('button')).toBeInTheDocument();
	fireEvent.click(getByRole('button'));
	expect(handleClick).toHaveBeenCalledTimes(1);
});
