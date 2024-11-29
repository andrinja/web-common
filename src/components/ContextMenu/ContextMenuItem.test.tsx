import ContextMenuItem from './ContextMenuItem';
import Icon from 'components/Icon';
import Link from '@mui/material/Link';
import React from 'react';
import {render} from 'utils/test-utils';

test('Icon', () => {
	const {getByText} = render(
		<ContextMenuItem icon={<Icon name="Album"/>} label="Context menu item"/>
	);

	expect(getByText('Context menu item')).toBeInTheDocument();
});

test('role="menuitem"', () => {
	const {getByText} = render(<ContextMenuItem label={<Link role="menuitem">Link</Link>}/>);

	expect(getByText('Link')).toBeInTheDocument();
});

test('Element as label Link child', () => {
	const {getByText} = render(<ContextMenuItem label={<Link>test</Link>}/>);

	expect(getByText('test')).toBeInTheDocument();
});
