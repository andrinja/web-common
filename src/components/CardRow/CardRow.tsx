import Grid, {GridProps} from '@mui/material/Grid';
import React, {ReactNode} from 'react';

export type Props = {
	children: ReactNode
} & GridProps;

export default function CardRow({children, ...rest}: Props) {
	return (
		<Grid
			container
			spacing={2}
			sx={theme => ({
				[theme.breakpoints.down('lg')]: {
					'> div:nth-of-type(n + 4)': {
						display: 'none',
					},
				},
				[theme.breakpoints.only('lg')]: {
					'> div:nth-of-type(n + 5)': {
						display: 'none',
					},
				},
				[theme.breakpoints.up('xl')]: {
					'> div:nth-of-type(n + 7)': {
						display: 'none',
					},
				},
			})}
			{...rest}
		>
			{children}
		</Grid>
	);
}
