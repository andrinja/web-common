import {fireEvent, render} from 'utils/test-utils';
import Box from '@mui/material/Box';
import React from 'react';
import Tooltip from './Tooltip';

test('Basic rendering', () => {
	const {getByText} = render(<Tooltip title="Title"><Box>Content</Box></Tooltip>);

	expect(getByText('Content')).toBeInTheDocument();

	fireEvent.mouseEnter(getByText('Content'));
	expect(getByText('Title')).toBeVisible();

	fireEvent.click(getByText('Content'));
	expect(getByText('Title')).toBeVisible();

	fireEvent.mouseLeave(getByText('Content'));
	expect(getByText('Title')).not.toBeVisible();
});

test('closeOnClick prop', () => {
	const {getByText} = render(<Tooltip closeOnClick title="Title"><Box>Content</Box></Tooltip>);

	expect(getByText('Content')).toBeInTheDocument();

	fireEvent.mouseEnter(getByText('Content'));
	expect(getByText('Title')).toBeVisible();

	fireEvent.click(getByText('Content'));
	expect(getByText('Title')).not.toBeVisible();

	fireEvent.mouseLeave(getByText('Content'));
	expect(getByText('Title')).not.toBeVisible();
});
