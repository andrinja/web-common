import React from 'react';
import SearchInit from './SearchInit';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	const {container} = render(<SearchInit/>);

	expect(container).not.toBeEmptyDOMElement();
});
