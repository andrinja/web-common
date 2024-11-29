import React, {MouseEventHandler} from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Icon from 'components/Icon';
import {useTranslation} from 'react-i18next';
import IconButton from '@mui/material/IconButton';

export type Props = {
	isCurrentContext?: boolean
	isFetching?: boolean
	isPlaying?: boolean
	isTrackLoading?: boolean
	onPlayClick?: MouseEventHandler
	playIcon?: 'PlayArrow' | 'RadioLogo'
};

export default function ArticlePlayButton({
	isCurrentContext = false,
	isFetching = false,
	isPlaying = false,
	isTrackLoading = false,
	onPlayClick,
	playIcon = 'PlayArrow',
}: Props) {
	const {t} = useTranslation();
	const isBusy = isFetching || isTrackLoading && isCurrentContext;

	if (!onPlayClick) {
		return null;
	}

	return (
		<Box
			alignItems="center"
			bgcolor="text.primary"
			borderRadius="50%"
			color="common.white"
			display="flex"
			height={40}
			justifyContent="center"
			sx={{
				border: 'none',
				cursor: isBusy ? 'default' : 'pointer',
				'> .MuiButtonBase-root, > .MuiCircularProgress-root': {
					position: 'absolute',
				},
				'> .MuiButtonBase-root:nth-of-type(1)': {
					visibility: !isCurrentContext && !isBusy ? 'visible' : 'hidden',
				},
				'> .MuiButtonBase-root:nth-of-type(2)': {
					visibility: isCurrentContext && !isPlaying && !isBusy ? 'visible' : 'hidden',
				},
				'> .MuiSvgIcon-root:nth-of-type(1)': {
					visibility: isCurrentContext && isPlaying && !isBusy ? 'visible' : 'hidden',
				},
				'> .MuiCircularProgress-root': {
					visibility: isBusy ? 'visible' : 'hidden',
				},
				':hover': {
					'> .MuiButtonBase-root:nth-of-type(1)': {
						visibility: isCurrentContext && isPlaying || isBusy ? 'hidden' : 'visible',
					},
					'> .MuiButtonBase-root:nth-of-type(2)': {
						visibility: isCurrentContext && isPlaying && !isBusy ? 'visible' : 'hidden',
					},
					'> .MuiSvgIcon-root:nth-of-type(1)': {
						visibility: 'hidden',
					},
				},
			}}
			width={40}
		>
			<IconButton aria-label={t('Play')} color="inherit" onClick={onPlayClick}>
				<Icon fontSize="large" name={playIcon}/>
			</IconButton>
			<IconButton aria-label={t('Pause')} color="inherit" onClick={onPlayClick}>
				<Icon fontSize="large" name="Pause"/>
			</IconButton>
			<Icon fontSize="large" name="VolumeUp" titleAccess={t('is playing')}/>
			<CircularProgress color="inherit" size={16} title={t('loading')}/>
		</Box>
	);
}
