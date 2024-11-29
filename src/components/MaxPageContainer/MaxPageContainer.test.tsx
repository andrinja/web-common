import MaxPageContainer from './MaxPageContainer';
import React from 'react';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	const {getByText} = render(<MaxPageContainer>content</MaxPageContainer>);
	expect(getByText('content')).toBeInTheDocument();
});
