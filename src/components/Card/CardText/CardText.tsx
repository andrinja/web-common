import React, {ReactNode} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ellipsis = {
	WebkitBoxOrient: 'vertical',
	display: '-webkit-box',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	wordBreak: 'break-word',
};

export type Props = {
	primary?: ReactNode
	secondary?: ReactNode
	textAlign?: 'center' | 'start'
	title?: string
};

export default function CardText({
	primary,
	secondary,
	textAlign = 'start',
	title,
}: Props) {
	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="space-between"
			sx={{
				marginBlockStart: 1,
				paddingBlock: 0,
			}}
			textAlign={textAlign}
		>
			{title && (
				<Typography color="text.secondary" sx={{paddingBlockEnd: 0.5}} variant="overline">
					{title}
				</Typography>
			)}
			{primary && (
				<Typography component="span" sx={{WebkitLineClamp: '2', ...ellipsis}} variant="subtitle2">
					{primary}
				</Typography>
			)}
			{
				secondary && typeof secondary === 'string'
					? (
						<Typography
							color="text.secondary"
							fontWeight="fontWeightMedium"
							sx={{WebkitLineClamp: '2', ...ellipsis}}
							variant="caption"
						>
							{secondary}
						</Typography>
					)
					: secondary
			}
		</Box>
	);
}
