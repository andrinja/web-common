import {render, waitFor} from 'utils/test-utils';
import userEvent, {UserEvent} from '@testing-library/user-event';
import AvatarMenu from './AvatarMenu';
import ContextMenuItem from '../ContextMenu/ContextMenuItem';
import React from 'react';

let user: UserEvent;

beforeAll(() => {
	user = userEvent.setup();
});

test('UserProfile not available', () => {
	const {getByRole} = render(<AvatarMenu/>);

	expect(getByRole('button')).toBeInTheDocument();
});

test('Displays user name', () => {
	const {getByText} = render(<AvatarMenu displayName="testUser"/>);

	expect(getByText('testUser')).toBeInTheDocument();
});

test('Close context menu', async() => {
	const {getByRole, getByText, queryByText} = render(
		<AvatarMenu displayName="testUser">
			<ContextMenuItem label="Go to Account"/>
		</AvatarMenu>
	);

	expect(queryByText('Go to Account')).toBeNull();

	await user.click(getByRole('button'));

	await waitFor(() => {
		expect(getByText('Go to Account')).toBeVisible();
	});

	await user.click(getByRole('button'));

	await waitFor(() => {
		expect(queryByText('Go to Account')).toBeNull();
	});
});
