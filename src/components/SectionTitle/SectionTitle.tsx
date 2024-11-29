import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';

export type Props = {
	subtitle?: string
	title: string
};

export default function SectionTitle({subtitle, title}: Props) {

	return (
		<Box mb={2}>
			<Typography variant="h2">{title}</Typography>
			{
				subtitle && subtitle !== ''
					&& <Typography color="text.secondary" variant="body2">{subtitle}</Typography>
			}
		</Box>
	);
}