import CardText from './';
import React from 'react';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	const {container} = render(<CardText/>);

	expect(container).not.toBeEmptyDOMElement();
});

test('Primary text', () => {
	const {getByText} = render(<CardText primary="Primary"/>);

	expect(getByText('Primary')).toBeInTheDocument();
});

test('Secondary text', () => {
	const {getByText} = render(<CardText secondary="Secondary"/>);

	expect(getByText('Secondary')).toBeInTheDocument();
});

test('Title', () => {
	const {getByText} = render(<CardText title="Title"/>);

	expect(getByText('Title')).toBeInTheDocument();
});
