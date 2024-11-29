import DragTooltip from './DragTooltip';
import React from 'react';
import {render} from 'utils/test-utils';

test('Basic rendering', () => {
	const {getByText} = render(<DragTooltip isDragging>Drag tooltip text</DragTooltip>);

	expect(getByText('Drag tooltip text')).toBeInTheDocument();
});

test('Not dragging', () => {
	const {queryByText} = render(<DragTooltip>Drag tooltip text</DragTooltip>);

	expect(queryByText('Drag tooltip text')).toBeNull();
});

test('Offsets', () => {
	const offset = {x: 0, y: 0};
	const {getByText} = render(
		<DragTooltip
			currentOffset={offset}
			initialClientOffset={offset}
			initialOffset={offset}
			isDragging
		>
			Drag tooltip text
		</DragTooltip>
	);

	expect(getByText('Drag tooltip text')).toBeInTheDocument();
});
