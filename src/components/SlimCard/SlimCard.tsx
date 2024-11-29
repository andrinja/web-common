import React, {MouseEventHandler} from 'react';
import Icon from 'components/Icon';
import LoadingButton from '@mui/lab/LoadingButton';
import {useTranslation} from 'react-i18next';

export type Props = {
	isCurrentContext?: boolean
	isFetching?: boolean
	isPlaying?: boolean
	isTrackLoading?: boolean
	onClick?: MouseEventHandler
	title: string
};

export default function SlimCard({
	isCurrentContext = false,
	isFetching = false,
	isPlaying = false,
	isTrackLoading = false,
	onClick,
	title,
}: Props) {
	const {t} = useTranslation();
	const isBusy = isFetching || isTrackLoading && isCurrentContext;

	return (
		<LoadingButton
			loading={isBusy}
			onClick={onClick}
			startIcon={(
				<>
					<Icon name="PlayArrow" titleAccess={t('Play')}/>
					<Icon name="Pause" titleAccess={t('Pause')}/>
					<Icon name="VolumeUp" titleAccess={t('is playing')}/>
					<Icon name="RadioLogo" titleAccess={t('Play')}/>
				</>
			)}
			sx={theme => ({
				height: 88,
				minWidth: '100%',
				position: 'relative',
				':before': {
					background: theme.palette.background.slimCardOverlay,
					content: '""',
					height: '100%',
					left: 0,
					pointerEvents: 'none',
					position: 'absolute',
					top: 0,
					width: '100%',
				},
				'> .MuiButton-startIcon': {
					'> .MuiSvgIcon-root:nth-of-type(1)': {
						display: 'none',
					},
					'> .MuiSvgIcon-root:nth-of-type(2)': {
						display: isCurrentContext && !isPlaying && !isBusy ? 'block' : 'none',
					},
					'> .MuiSvgIcon-root:nth-of-type(3)': {
						display: isCurrentContext && isPlaying && !isBusy ? 'block' : 'none',
					},
					'> .MuiSvgIcon-root:nth-of-type(4)': {
						display: !isCurrentContext && !isBusy ? 'block' : 'none',
					},
				},
				':hover': {
					'> .MuiButton-startIcon': {
						'> .MuiSvgIcon-root:nth-of-type(1)': {
							display: !isCurrentContext || isCurrentContext && !isPlaying && !isBusy
								? 'block'
								: 'none',
						},
						'> .MuiSvgIcon-root:nth-of-type(2)': {
							display: isCurrentContext && isPlaying && !isBusy ? 'block' : 'none',
						},
						'> .MuiSvgIcon-root:nth-of-type(3)': {
							display: 'none',
						},
						'> .MuiSvgIcon-root:nth-of-type(4)': {
							display: 'none',
						},
					},
				},
			})}
			variant="contained"
		>
			{title}
		</LoadingButton>
	);
}
