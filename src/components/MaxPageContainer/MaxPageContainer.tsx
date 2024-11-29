import React, {ReactNode} from 'react';
import Grid from '@mui/material/Grid';

export type Props = {
	children?: ReactNode
};

export default function MaxPageContainer({children}: Props) {
	return (
		<Grid alignItems="flex-start" container flexGrow={1} maxWidth={1980}>
			{children}
		</Grid>
	);
}
