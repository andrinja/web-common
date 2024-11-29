import DragTooltip, {DragTooltipProps} from './DragTooltip';
import type {Meta, StoryObj} from '@storybook/react';

const dragTooltip: Meta<DragTooltipProps> = {
	component: DragTooltip,
	argTypes: {
		currentOffset: {
			table: {
				disable: true,
			},
		},
		initialClientOffset: {
			table: {
				disable: true,
			},
		},
		initialOffset: {
			table: {
				disable: true,
			},
		},
		isDragging: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		currentOffset: {
			x: 0,
			y: 0,
		},
		initialClientOffset: {
			x: 16,
			y: 16,
		},
		initialOffset: {
			x: 0,
			y: 0,
		},
		isDragging: true,
	},
	parameters: {
		docs: {
			story: {
				iframeHeight: 80,
				inline: false,
			},
		},
	},
};

export default dragTooltip;

export const Default: StoryObj<DragTooltipProps> = {
	args: {
		children: 'You see me when dragging an item',
	},
};
