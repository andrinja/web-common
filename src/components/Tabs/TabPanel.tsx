import Box, {BoxProps} from '@mui/material/Box';
import React, {ReactNode} from 'react';

export type Props = {
	children?: ReactNode
	index?: string | number
} & BoxProps;

export default function TabPanel({children, ...rest}: Props) {
	return (
		<Box pt={3} role="tabpanel" {...rest}>
			{children}
		</Box>
	);
}
