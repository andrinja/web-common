import Grid, {GridProps} from '@mui/material/Grid';
import React, {ReactNode} from 'react';

export type Props = {
	children: ReactNode
} & GridProps;

export default function GridView({children, ...rest}: Props) {
	return (
		<Grid container columnSpacing={2} rowSpacing={3} {...rest}>
			{children}
		</Grid>
	);
}