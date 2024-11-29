import CardSkeleton from './CardSkeleton';
import React from 'react';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	const {container} = render(<CardSkeleton/>);

	expect(container).not.toBeEmptyDOMElement();
});

test('circular variant', () => {
	const {container} = render(<CardSkeleton variant="circular"/>);

	expect(container).not.toBeEmptyDOMElement();
});
