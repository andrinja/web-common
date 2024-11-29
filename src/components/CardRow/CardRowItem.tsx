import React, {ReactNode} from 'react';
import Grid from '@mui/material/Grid';

type Props = {
	children: ReactNode
};

export default function CardRowItem({children}: Props) {
	return (
		<Grid item xs={4} lg={3} xl={2}>
			{children}
		</Grid>
	);
}
