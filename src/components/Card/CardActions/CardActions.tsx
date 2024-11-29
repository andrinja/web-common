import Box, {BoxProps} from '@mui/material/Box';
import React, {ReactNode} from 'react';

export type Props = {
	alignment?: 'default' | 'center'
	children?: ReactNode
} & BoxProps;

export default function CardActions({alignment = 'default', children, ...rest}: Props) {
	return (
		<Box
			bottom={0}
			mb={1}
			position="absolute"
			sx={{
				gap: 1,
				...alignment !== 'center' && {
					mx: 1,
					right: 0,
				},
				...alignment === 'center' && {
					justifyContent: 'center',
					left: '50%',
					transform: 'translate(-50%)',
					width: '50%',
				},
			}}
			{...rest}
		>
			{children}
		</Box>
	);
}
