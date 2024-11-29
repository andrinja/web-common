import React, {MouseEventHandler} from 'react';
import Box from '@mui/material/Box';
import {GenericPlayButton} from '../../GenericPlayButton';

export type Props = {
	borderRadius?: number | string
	onClick?: MouseEventHandler
};

export default function CardControl({borderRadius, onClick}: Props) {

	if (!onClick) {
		return null;
	}

	const handleClick: MouseEventHandler = event => {
		event.preventDefault();
		event.stopPropagation();
		onClick(event);
	};

	return (
		<Box
			borderRadius={borderRadius}
			display="flex"
			height={1}
			left={0}
			position="absolute"
			sx={{
				...(borderRadius === '50%'
					? {
						alignItems: 'center',
						justifyContent: 'center',
					}
					: {
						alignItems: 'flex-end',
						boxSizing: 'border-box',
						justifyContent: 'flex-start',
						p: 1,
					}
				),
			}}
			top={0}
			width={1}
		>
			<GenericPlayButton onClick={handleClick}/>
		</Box>
	);
}
