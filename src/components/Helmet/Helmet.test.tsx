import {render, waitFor} from 'utils/test-utils';
import Helmet from '../Helmet';
import React from 'react';

test('Basic rendering', () => {
	render(<Helmet title="test"/>);

	waitFor(() => expect(document.title).toEqual('test'));
});
