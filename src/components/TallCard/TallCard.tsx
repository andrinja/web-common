import * as icons from 'icons/modes';
import {Grid, Typography} from '@mui/material';
import React, {MouseEventHandler} from 'react';
import {GenericPlayButton} from '../GenericPlayButton';
import Icon from 'components/Icon';
import {Theme} from '@mui/material/styles';

export type Mode = {
	color: keyof Theme['palette']['moods']
	icon: string
	name: string
};

export type Props = {
	imgSrc: string
	imgTitle: string
	isCurrentContext?: boolean
	isFetching?: boolean
	isPlaying?: boolean
	isTrackLoading?: boolean
	mode?: Mode
	onClick?: MouseEventHandler
	title: string
};

export default function TallCard({
	imgSrc,
	imgTitle,
	isCurrentContext = false,
	isFetching = false,
	isPlaying = false,
	isTrackLoading = false,
	mode,
	onClick,
	title,
}: Props) {
	const isBusy = isFetching || isTrackLoading && isCurrentContext;

	return (
		<Grid
			container
			sx={theme => ({
				...theme.mixins.genericPlayButton({
					isBusy,
					isPaused: isCurrentContext && !isPlaying && !isBusy,
					isPlaying: isCurrentContext && isPlaying && !isBusy,
					isReadyToPlay: (!isCurrentContext || !isPlaying) && !isBusy,
					showPlayByDefault: true,
				}),
				'.MagentGenericPlayButton > .MuiIconButton-root': {
					bgcolor: 'common.white',
					height: 40,
					width: 40,
					'&:hover': {
						bgcolor: 'primary.main',
						color: 'common.white',
					},
				},
			})}
		>
			<Grid
				container
				borderRadius={1}
				direction="column"
				justifyContent="space-between"
				overflow="hidden"
				sx={{
					aspectRatio: 278 / 338,
					backgroundImage: `url(${imgSrc})`,
					backgroundRepeat: 'round',
					backgroundSize: 'cover',
					bgcolor: 'grey.main',
				}}
			>
				<Grid container item p={2}>
					{mode && (
						<Grid
							alignItems="center"
							bgcolor={`moods.${mode.color}.light`}
							borderRadius={1}
							color={`moods.${mode.color}.main`}
							columnGap={0.5}
							container
							item
							px={2}
							py={1}
							xs="auto"
						>
							<Icon
								fallback="music_note_active"
								name={`${mode.icon}_active` as keyof typeof icons}
							/>
							<Typography fontWeight="fontWeightMedium" variant="caption">{mode.name}</Typography>
						</Grid>
					)}
					<Grid item color="common.white" py={1} xs={12}>
						<Typography component="div" variant="h2">{imgTitle}</Typography>
					</Grid>
				</Grid>
				<Grid container item justifyContent="flex-end" p={2}>
					<GenericPlayButton playIcon="RadioLogo" onClick={onClick}/>
				</Grid>
			</Grid>
			<Grid item mt={1}>
				<Typography
					sx={{
						WebkitLineClamp: '2',
						WebkitBoxOrient: 'vertical',
						display: '-webkit-box',
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						wordBreak: 'break-word',
					}}
					variant="caption"
				>
					{title}
				</Typography>
			</Grid>
		</Grid>
	);
}