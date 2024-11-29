import ListItemText from './StyledListItemText';
import React from 'react';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	const {getByText} = render(<ListItemText>text</ListItemText>);

	expect(getByText('text')).toBeInTheDocument();
});
