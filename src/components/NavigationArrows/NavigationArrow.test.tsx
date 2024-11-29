import NavigationArrow from './NavigationArrow';
import React from 'react';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	const {getAllByRole} = render(<NavigationArrow icon="mock icon"/>);

	expect(getAllByRole('button').length).toBe(1);
});
