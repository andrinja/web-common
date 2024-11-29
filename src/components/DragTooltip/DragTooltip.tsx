import React, {ReactNode} from 'react';
import Box from '@mui/material/Box';
import Icon from 'components/Icon';

type Offset = {
	x: number
	y: number
};

function getItemStyles(
	currentOffset?: Offset | null,
	initialClientOffset?: Offset | null,
	initialOffset?: Offset | null
) {
	if (!initialOffset || !currentOffset || !initialClientOffset) {
		return {
			display: 'none',
		};
	}

	let {x, y} = initialClientOffset as Offset;
	x -= initialOffset.x - 16;
	y -= initialOffset.y - 16;
	x += currentOffset.x + 16;
	y += currentOffset.y - 16;

	const transform = `translate(${x}px, ${y}px)`;

	return {
		transform,
		WebkitTransform: transform,
	};
}

export type DragTooltipProps = {
	children?: ReactNode
	currentOffset?: Offset | null
	initialClientOffset?: Offset | null
	initialOffset?: Offset | null
	isDragging?: boolean
};

export default function DragTooltip({
	children,
	currentOffset,
	initialClientOffset,
	initialOffset,
	isDragging = false,
}: DragTooltipProps) {
	if (!isDragging) {
		return null;
	}

	return (
		<Box
			left={0}
			position="fixed"
			style={getItemStyles(currentOffset, initialClientOffset, initialOffset)}
			top={0}
			zIndex="tooltip"
		>
			<Icon
				name="Add"
				sx={{
					bgcolor: 'common.black',
					borderRadius: '50%',
					boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.25)',
					color: 'common.white',
					fontSize: '16px',
					left: '-11px',
					position: 'absolute',
					top: '4px',
				}}
			/>
			<Box
				alignItems="center"
				bgcolor="common.white"
				borderRadius="4px"
				boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.15)"
				display="flex"
				height="100%"
				px={1}
				py={0.5}
				typography="caption"
			>
				{children}
			</Box>
		</Box>
	);
}
