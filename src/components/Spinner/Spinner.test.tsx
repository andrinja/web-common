import React from 'react';
import Spinner from '../Spinner';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	const {container} = render(<Spinner/>);

	expect(container).not.toBeEmptyDOMElement();
	expect(container.firstChild).not.toBeVisible();
});

test('Placement', () => {
	const {container} = render(<Spinner placement="bottom"/>);

	expect(container).not.toBeEmptyDOMElement();
});

test('Show', () => {
	const {container} = render(<Spinner show/>);

	expect(container.firstChild).toBeVisible();
});
