import Grid, {GridProps} from '@mui/material/Grid';
import React, {ReactNode} from 'react';

export type Props = {
	children?: ReactNode
} & GridProps;

export default function CenterAlign({children}: Props) {
	return (
		<Grid
			alignItems="center"
			display="flex"
			flexDirection="column"
			flexGrow="1"
			height="100%"
			justifyContent="center"
			width="100%"
		>
			{children}
		</Grid>
	);
}
