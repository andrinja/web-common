import CircularProgress, {CircularProgressProps} from '@mui/material/CircularProgress';
import Grid, {GridProps} from '@mui/material/Grid';
import React from 'react';

export type Props = {
	CircularProgressProps?: CircularProgressProps
	placement?: 'bottom' | 'center'
	show?: boolean
} & GridProps;

export default function Spinner({
	CircularProgressProps,
	placement = 'center',
	show = false,
	...rest
}: Props) {
	return (
		<Grid
			alignItems="center"
			position="absolute"
			sx={{
				...placement !== 'bottom' ? {} : {
					display: 'flex',
					justifyContent: 'center',
					left: 0,
					paddingBlockStart: 6,
					width: '100%',
				},
				...placement !== 'center' ? {} : {
					bgcolor: 'background.default',
					display: 'flex',
					height: '100%',
					insetBlockStart: 0,
					insetInlineStart: 0,
					justifyContent: 'center',
					width: '100%',
					zIndex: 'spinner',
					'::after': {
						content: '\'\'',
						height: '100%',
						position: 'absolute',
						width: '100%',
					},
				},
				...show ? {} : {display: 'none'},
			}}
			{...rest}
		>
			<CircularProgress
				color="secondary"
				{...placement !== 'center' ? {} : {sx: {insetBlockStart: '50%', position: 'fixed'}}}
				{...CircularProgressProps}
			/>
		</Grid>
	);
}
