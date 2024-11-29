import CardRow, {CardRowItem} from './';
import React from 'react';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	const {getByText} = render(
		<CardRow>
			<CardRowItem>Item</CardRowItem>
		</CardRow>
	);

	expect(getByText('Item')).toBeInTheDocument();
});
