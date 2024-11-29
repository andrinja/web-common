import CommonError, {CommonErrorAction} from 'errors/CommonError';
import userEvent, {UserEvent} from '@testing-library/user-event';
import ErrorPage from './ErrorPage';
import React from 'react';
import {render} from 'utils/test-utils';

let user: UserEvent;

beforeAll(() => {
	user = userEvent.setup();
});

test('Basic rendering', () => {
	const error = new CommonError('Oops…', 'Is not you is us :)');
	const {container, getByText} = render(<ErrorPage error={error}/>);

	expect(getByText('Oops…')).toBeInTheDocument();
	expect(getByText('Is not you is us :)')).toBeInTheDocument();
	expect(container?.firstChild?.childNodes).toHaveLength(3);
});

test('Providing resetErrorBoundary', async() => {
	const handleResetErrorBoundary = jest.fn();
	const error = new CommonError('Oops…', 'Is not you is us :)');

	const {getByText} = render(
		<ErrorPage error={error} resetErrorBoundary={handleResetErrorBoundary}/>
	);

	expect(getByText('Try again')).toBeInTheDocument();
	await user.click(getByText('Try again'));
	expect(handleResetErrorBoundary).toHaveBeenCalledTimes(1);
});

test('With action', async() => {
	const handleClick = jest.fn();
	const error = new CommonError(
		'Oops…',
		'Is not you is us :)',
		'ErrorGeneral',
		handleClick,
		'Press me'
	);
	const {container, getByText} = render(<ErrorPage error={error}/>);

	expect(container?.firstChild?.childNodes).toHaveLength(4);
	await user.click(getByText('Press me'));
	expect(handleClick).toHaveBeenCalledTimes(1);
});

test('Resetting error boundary on click', async() => {
	const handleResetErrorBoundary = jest.fn();
	const error = new CommonError(
		'Oops…',
		'Is not you is us :)',
		'ErrorGeneral',
		'reset' as unknown as CommonErrorAction,
		'Press me'
	);
	const {container, getByText} = render(
		<ErrorPage error={error} resetErrorBoundary={handleResetErrorBoundary}/>
	);

	expect(container?.firstChild?.childNodes).toHaveLength(4);
	await user.click(getByText('Press me'));
	expect(handleResetErrorBoundary).toHaveBeenCalledTimes(1);
});
