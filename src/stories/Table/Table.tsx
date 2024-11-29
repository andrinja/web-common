import React, {ReactNode} from 'react';
import {default as MuiTable} from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Typography from '@mui/material/Typography';

type Props = {
	children?: ReactNode
	title?: string
};

export default function Table({children, title}: Props) {
	return (
		<>
			{title && <Typography mb={3} variant="h1">{title}</Typography>}
			<TableContainer>
				<MuiTable sx={{width: 'fit-content'}}>
					{children}
				</MuiTable>
			</TableContainer>
		</>
	);
}
