import Input from './Input';
import React from 'react';
import {render} from 'utils/test-utils';

test('Minimal properties', () => {
	const {container} = render(<Input/>);
	expect(container).not.toBeEmptyDOMElement();
});

test('id property', () => {
	const {container} = render(<Input id="id"/>);
	expect(container).not.toBeEmptyDOMElement();
});

test('Basic rendering', () => {
	const {getByLabelText} = render(<Input label="label"/>);
	expect(getByLabelText('label')).toBeInTheDocument();
});
