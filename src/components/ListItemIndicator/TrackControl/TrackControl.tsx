import GenericPlayButton from '../../GenericPlayButton';
import Grid from '@mui/material/Grid';
import {MouseEventHandler} from 'react';
import React from 'react';

export type Props = {
	onClick: MouseEventHandler
};

export default function TrackControl({onClick}: Props) {
	return (
		<Grid
			alignItems="center"
			bgcolor="transparent"
			borderRadius={0.5}
			container
			height={1}
			justifyContent="center"
			left={0}
			position="absolute"
			sx={{
				'> .MagentGenericPlayButton': {
					borderRadius: 0.5,
					// Disabled buttons inherit the color
					color: 'common.black',
					height: 1,
					width: 1,
					'> .MuiIconButton-root': {
						bgcolor: 'transparent',
						height: 1,
						width: 1,
						'.MuiTouchRipple-root': {
							borderRadius: 0.5,
							'.MuiTouchRipple-child': {
								borderRadius: 0.5,
							},
						},
					},
				},
			}}
			top={0}
			width={1}
		>
			<GenericPlayButton onClick={onClick}/>
		</Grid>
	);
}
