import React, {ReactNode} from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

type Props = {
	children?: ReactNode
};

export default function TableHeader({children}: Props) {
	return (
		<TableHead>
			<TableRow>
				{children}
			</TableRow>
		</TableHead>
	);
}
