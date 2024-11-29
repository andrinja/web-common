import React, {ReactNode} from 'react';
import Typography, {TypographyProps} from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

export type Props = {
	album: string
	artist: string
	playButton?: ReactNode
	src: string
	title: string
};

export default function TuneDialogPreview({album, artist, playButton, src, title}: Props) {
	const typographyProps: TypographyProps = {
		fontWeight: 'fontWeightMedium',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
	};

	return (
		<List disablePadding>
			<ListItem
				sx={{
					paddingInlineEnd: 7,
					':hover': {
						backgroundColor: 'transparent',
					},
					'.MuiListItemSecondaryAction-root': {
						marginRight: 2,
					},
				}}
				{...playButton ? {secondaryAction: playButton} : {}}
			>
				<ListItemAvatar
					sx={{
						minWidth: 'auto',
						paddingRight: 2,
					}}
				>
					<Avatar
						src={src}
						sx={{
							height: 48,
							width: 48,
						}}
						variant="square"
					/>
				</ListItemAvatar>
				<ListItemText
					disableTypography
					primary={<Typography {...typographyProps} variant="body2">{title}</Typography>}
					secondary={(
						<Typography {...typographyProps} color="text.secondary" variant="caption">
							{`${album} · ${artist}`}
						</Typography>
					)}
					sx={{display: 'grid'}}
				/>
			</ListItem>
		</List>
	);
}
