import CardGrid, {CardGridItem} from './';
import React from 'react';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	const {getByText} = render(
		<CardGrid>
			<CardGridItem>Item</CardGridItem>
		</CardGrid>
	);

	expect(getByText('Item')).toBeInTheDocument();
});
