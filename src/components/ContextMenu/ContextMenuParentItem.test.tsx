import ContextMenuParentItem from './ContextMenuParentItem';
import Icon from 'components/Icon';
import React from 'react';
import {render} from 'utils/test-utils';

test('Icon', () => {
	const {getByText} = render(
		<ContextMenuParentItem icon={<Icon name="Album"/>} id="test" label="Context menu parent item"/>
	);

	expect(getByText('Context menu parent item')).toBeInTheDocument();
});
