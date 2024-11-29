import React, {MouseEventHandler} from 'react';
import Link from '@mui/material/Link';
import {Link as RouterLink} from 'react-router-dom';

export type Props = {
	linkTo: string
	onClick: MouseEventHandler
	text: string
};

export default function CardTextLink({linkTo, onClick, text}: Props) {
	return (
		<Link
			color="text.primary"
			component={RouterLink}
			display="-webkit-box"
			onClick={onClick}
			sx={theme => ({
				WebkitBoxOrient: 'vertical',
				WebkitLineClamp: 2,
				color: 'inherit',
				fontWeight: 'inherit',
				overflow: 'hidden',
				textDecoration: 'none',
				textOverflow: 'ellipsis',
				wordBreak: 'break-word',
				':hover': {
					textDecoration: 'underline',
					textDecorationColor: theme.palette.text.primary,
				},
			})}
			title={text}
			to={linkTo}
		>
			{text}
		</Link>
	);
}
