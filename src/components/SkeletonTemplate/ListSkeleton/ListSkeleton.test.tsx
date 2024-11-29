import ListSkeleton from './ListSkeleton';
import React from 'react';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	expect(() => render(<ListSkeleton/>)).not.toThrow();
});

test('Render correct count of node according to nodeCount', () => {
	const {container} = render(<ListSkeleton nodeCount={10}/>);

	const listContainer = container.firstChild;
	expect(listContainer?.childNodes.length).toBe(10);
});
