import CardSkeletonGrid from './CardSkeletonGrid';
import React from 'react';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	expect(() => render(<CardSkeletonGrid/>)).not.toThrow();
});

test('Render correct count of node according to nodeCount', () => {
	const {container} = render(<CardSkeletonGrid nodeCount={10}/>);

	const cardSkeletonContainer = container.firstChild;
	expect(cardSkeletonContainer?.childNodes.length).toBe(10);
});
