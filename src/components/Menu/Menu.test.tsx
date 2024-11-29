import Menu, {MenuItem} from './';
import React, {useRef, useState} from 'react';
import userEvent, {UserEvent} from '@testing-library/user-event';
import Button from '@mui/material/Button';
import type {MenuProps} from './';
import {render} from 'utils/test-utils';
import {act} from '@testing-library/react';

function TestComponent(props?: Omit<MenuProps, 'open' | 'setOpen'>) {
	const [open, setOpen] = useState(false);
	const buttonRef = useRef<HTMLButtonElement>(null);

	return (
		<>
			<Button onClick={() => !open && setOpen(true)} ref={buttonRef}>Button</Button>
			<Menu {...props} anchorEl={buttonRef.current} open={open} setOpen={setOpen}>
				<MenuItem>Item 1</MenuItem>
				<MenuItem>Item 2</MenuItem>
			</Menu>
			<div>outside</div>
		</>
	);
}

let user: UserEvent;

beforeAll(() => {
	user = userEvent.setup();
});

test('Basic rendering', async() => {
	const {getByRole, getByText} = render(<TestComponent/>);

	await user.click(getByRole('button'));

	expect(getByText('Item 1')).toBeInTheDocument();
	expect(getByText('Item 2')).toBeInTheDocument();
});

test('Clicking button does not implicitly close the menu', async() => {
	const {getByRole, getByText, queryByText} = render(<TestComponent/>);

	await user.click(getByText('Button'));
	expect(getByText('Item 1')).toBeVisible();

	await user.click(getByRole('button'));
	expect(queryByText('Item 1')).toBeVisible();
});

test('Click outside of menu to close menu', async() => {
	const {getByText, queryByText} = render(<TestComponent/>);

	await user.click(getByText('Button'));
	expect(getByText('Item 1')).toBeVisible();

	await user.click(getByText('outside'));
	expect(queryByText('Item 1')).toBeNull();
});

test('Keyboard handling', async() => {
	const {getByRole, getByText, queryByText} = render(<TestComponent/>);

	act(() => {
		getByRole('button').focus();
	});

	await user.keyboard('[Space]');
	expect(getByText('Item 1')).toBeVisible();
	await user.keyboard('[Escape]');
	expect(queryByText('Item 1')).toBeNull();

	await user.keyboard('[Space]');
	expect(getByText('Item 1')).toBeVisible();
	await user.keyboard('[Tab]');
	expect(queryByText('Item 1')).toBeNull();

	await user.keyboard('[Space]');
	expect(getByText('Item 1')).toBeVisible();
	await user.keyboard('[ArrowDown]');
	expect(getByText('Item 1')).toBeVisible();
});

test('Alternative placement prop', async() => {
	const {getByRole, getByText} = render(<TestComponent placement="bottom-end"/>);

	await user.click(getByRole('button'));
	expect(getByText('Item 1')).toBeInTheDocument();
});
