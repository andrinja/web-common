import Icon from '../Icon';
import React from 'react';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	const {container} = render(<Icon name="Add"/>);

	expect(container).not.toBeEmptyDOMElement();
});

test('Large icon', () => {
	const {container} = render(<Icon name="ErrorGeneral"/>);

	expect(container).not.toBeEmptyDOMElement();
});

test('Fall-back icon', () => {
	// @ts-expect-error Intentionally defining an invalid name prop
	const {container} = render(<Icon fallback="Add" name="does-not-exist"/>);

	expect(container).not.toBeEmptyDOMElement();
});

test('Trying to render a non-existing icon', () => {
	// @ts-expect-error Intentionally defining an invalid name prop
	const {container} = render(<Icon name="does-not-exist"/>);

	expect(container).toBeEmptyDOMElement();
});
