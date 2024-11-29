import React, {useEffect} from 'react';
import {Snackbar, SnackbarContextProvider, useSnackbar} from './';
import {fireEvent} from '@testing-library/react';
import {render} from 'utils/test-utils';

function TestComponent() {
	const {setSnackbarMessage} = useSnackbar();

	useEffect(() => {
		setSnackbarMessage('test');
	}, [setSnackbarMessage]);

	return null;
}

test('Basic rendering', () => {
	const {queryByText} = render(
		<SnackbarContextProvider>
			<TestComponent/>
			<Snackbar/>
		</SnackbarContextProvider>
	);

	expect(queryByText('test')).toBeInTheDocument();

	fireEvent.keyDown(document.body, {key: 'Escape'});

	expect(queryByText('test')).toBeNull();
});

test('Throws error when useSnackbar is used outside provider', () => {
	console.error = jest.fn();

	expect(() => render(<TestComponent/>)).toThrow(Error);
});
